"use client";

import {
    Printer,
    MapPin,
    Phone,
    Clock,
    Search,
    ChevronRight,
    AlertCircle,
    CheckCircle2,
    Trash2,
    ExternalLink,
    Mail,
    User,
    X
} from "lucide-react";
import { useState, useEffect } from "react";

export default function RequestManager() {
    const [requests, setRequests] = useState<any[]>([]);
    const [selectedRequest, setSelectedRequest] = useState<any>(null);

    useEffect(() => {
        const load = () => {
            const stored = localStorage.getItem("jrpl_requests");
            if (stored) setRequests(JSON.parse(stored).reverse());
        };
        load();
        window.addEventListener("storage", load);
        return () => window.removeEventListener("storage", load);
    }, []);

    const handleDelete = (id: string) => {
        const updated = requests.filter(r => r.id !== id);
        setRequests(updated);
        localStorage.setItem("jrpl_requests", JSON.stringify(updated.reverse()));
    };

    const updateStatus = (id: string, newStatus: string) => {
        const updated = requests.map(r => r.id === id ? { ...r, status: newStatus } : r);
        setRequests(updated);
        localStorage.setItem("jrpl_requests", JSON.stringify(updated.reverse()));
        setSelectedRequest(null);
    };

    return (
        <div className="space-y-10 animate-in fade-in duration-500 pb-20">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="relative w-full sm:w-96">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search by ID, Name or Printer..."
                        className="w-full pl-11 pr-4 py-4 bg-white border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-green-50 focus:border-[#22c55e] transition-all font-bold text-sm shadow-sm"
                    />
                </div>
                <div className="flex bg-white p-2 rounded-2xl border border-gray-100 shadow-sm gap-2">
                    {["All", "Pending", "Active", "Done"].map(status => (
                        <button key={status} className="px-6 py-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-[#0f172a] transition-all rounded-lg hover:bg-gray-50">
                            {status}
                        </button>
                    ))}
                </div>
            </div>

            {/* Requests Table */}
            <div className="bg-white rounded-[3rem] border border-gray-100 shadow-sm overflow-hidden overflow-x-auto shadow-2xl shadow-gray-100">
                <table className="w-full text-left">
                    <thead className="bg-gray-50/50">
                        <tr className="border-b border-gray-100">
                            <th className="px-10 py-8 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Client Identity</th>
                            <th className="px-10 py-8 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Hardware Detail</th>
                            <th className="px-10 py-8 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Logged Date</th>
                            <th className="px-10 py-8 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Ticketing Status</th>
                            <th className="px-10 py-8 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50 font-medium">
                        {requests.length === 0 && (
                            <tr>
                                <td colSpan={5} className="px-10 py-32 text-center text-gray-300 font-bold uppercase tracking-widest text-xs">No service requests yet from Lucknow store</td>
                            </tr>
                        )}
                        {requests.map(req => (
                            <tr
                                key={req.id}
                                className="hover:bg-gray-50/50 transition-all group cursor-pointer"
                                onClick={() => setSelectedRequest(req)}
                            >
                                <td className="px-10 py-8">
                                    <div className="font-black text-[#0f172a] text-lg">{req.customer}</div>
                                    <div className="text-[10px] font-black text-[#22c55e] uppercase tracking-[0.3em] mt-2 bg-green-50 px-2 py-0.5 rounded-lg w-fit">{req.id}</div>
                                </td>
                                <td className="px-10 py-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 shadow-inner group-hover:bg-white transition-all">
                                            <Printer size={20} />
                                        </div>
                                        <span className="text-sm font-bold text-gray-700">{req.product}</span>
                                    </div>
                                </td>
                                <td className="px-10 py-8">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{req.date}</span>
                                </td>
                                <td className="px-10 py-8">
                                    <div className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest inline-block ${req.status === 'Completed' ? 'bg-green-50 text-green-600' :
                                            req.status === 'In Progress' ? 'bg-blue-50 text-blue-600' :
                                                'bg-amber-50 text-amber-600'
                                        }`}>
                                        {req.status}
                                    </div>
                                </td>
                                <td className="px-10 py-8">
                                    <button className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-2xl text-gray-300 hover:bg-[#0f172a] hover:text-white transition-all">
                                        <ExternalLink size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Details Modal */}
            {selectedRequest && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
                    <div className="bg-white rounded-[3rem] max-w-3xl w-full shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-300">
                        <div className="absolute top-0 left-0 w-full h-3 bg-[#22c55e]" />

                        <div className="p-12">
                            <div className="flex justify-between items-start mb-12">
                                <div>
                                    <div className="text-[10px] font-black text-gray-300 uppercase tracking-[0.4em] mb-2 font-mono">Lucknow Region Ticket</div>
                                    <h3 className="text-4xl font-black text-[#0f172a]">{selectedRequest.id}</h3>
                                </div>
                                <button onClick={() => setSelectedRequest(null)} className="p-3 bg-gray-50 rounded-full text-gray-400 hover:text-gray-900 shadow-inner">
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-12 mb-12">
                                <div className="space-y-8">
                                    <div className="flex gap-5">
                                        <div className="w-12 h-12 bg-indigo-50 text-[#4f46e5] rounded-2xl shrink-0 flex items-center justify-center shadow-inner"><User size={24} /></div>
                                        <div>
                                            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Customer</div>
                                            <div className="text-base font-bold text-[#0f172a]">{selectedRequest.customer}</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="w-12 h-12 bg-green-50 text-[#22c55e] rounded-2xl shrink-0 flex items-center justify-center shadow-inner"><Phone size={24} /></div>
                                        <div>
                                            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Contact No.</div>
                                            <div className="text-base font-bold text-[#0f172a]">{selectedRequest.phone}</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="w-12 h-12 bg-amber-50 text-[#f59e0b] rounded-2xl shrink-0 flex items-center justify-center shadow-inner"><MapPin size={24} /></div>
                                        <div>
                                            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Location</div>
                                            <div className="text-sm font-bold text-gray-900 leading-tight">{selectedRequest.location}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-8">
                                    <div className="flex gap-5">
                                        <div className="w-12 h-12 bg-gray-50 text-gray-400 rounded-2xl shrink-0 flex items-center justify-center shadow-inner"><Printer size={24} /></div>
                                        <div>
                                            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Hardware Model</div>
                                            <div className="text-base font-bold text-[#0f172a]">{selectedRequest.product}</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl shrink-0 flex items-center justify-center shadow-inner"><Mail size={24} /></div>
                                        <div>
                                            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Email Log</div>
                                            <div className="text-base font-bold text-[#0f172a] whitespace-nowrap overflow-hidden text-ellipsis">{selectedRequest.email}</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl shrink-0 flex items-center justify-center shadow-inner"><AlertCircle size={24} /></div>
                                        <div>
                                            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Priority</div>
                                            <div className="text-sm font-bold text-red-600">Standard Schedule</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50/50 p-8 rounded-[2rem] mb-12 border border-gray-100 shadow-inner">
                                <div className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] mb-4">Diagnostic Narrative</div>
                                <p className="text-gray-700 font-bold leading-relaxed italic">"{selectedRequest.issue}"</p>
                            </div>

                            <div className="flex gap-4">
                                <button
                                    onClick={() => updateStatus(selectedRequest.id, "Completed")}
                                    className="flex-1 bg-[#22c55e] text-white py-6 rounded-[1.5rem] font-black text-sm uppercase tracking-widest hover:bg-[#16a34a] shadow-2xl shadow-green-900/10 active:scale-95 flex items-center justify-center gap-3"
                                >
                                    <CheckCircle2 size={24} /> Resolution Done
                                </button>
                                <button
                                    onClick={() => handleDelete(selectedRequest.id)}
                                    className="px-10 bg-red-50 text-red-500 rounded-[1.5rem] font-black text-sm uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all flex items-center justify-center gap-3 border border-red-100"
                                >
                                    <Trash2 size={24} /> Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
