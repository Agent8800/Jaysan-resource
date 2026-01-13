"use client";

import {
    Printer,
    MapPin,
    Phone,
    Clock,
    Search,
    Filter,
    ChevronRight,
    AlertCircle,
    CheckCircle2,
    Trash2,
    ExternalLink
} from "lucide-react";
import { useState } from "react";

const initialRequests = [
    { id: "PR-12345", customer: "Ahmad Ali", product: "HP Laser Jet M15w", email: "ahmad@gmail.com", phone: "+91 98765 43210", urgency: "Standard", status: "In Progress", date: "Jan 12, 10:30 AM", issue: "Paper jam error and weird noise during startup." },
    { id: "PR-12344", customer: "Sarah Khan", product: "Canon InkJet G3010", email: "sarah@yahoo.com", phone: "+91 91234 56789", urgency: "Urgent", status: "Pending", date: "Jan 12, 11:15 AM", issue: "Ink leaking from the bottom of the printer." },
    { id: "PR-12343", customer: "Indus Towers", product: "Architectural Plotter Z9", email: "contact@indus.in", phone: "+91 120 4455667", urgency: "Critical", status: "Completed", date: "Jan 11, 4:20 PM", issue: "Print head alignment failure for large format sheets." },
];

export default function RequestManager() {
    const [requests, setRequests] = useState(initialRequests);
    const [selectedRequest, setSelectedRequest] = useState<any>(null);

    return (
        <div className="space-y-8 animate-in fade-in duration-500 pb-20">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="relative w-full sm:w-96">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search requests by ID or name..."
                        className="w-full pl-11 pr-4 py-3 bg-white border border-gray-100 rounded-xl outline-none focus:ring-4 focus:ring-green-50 focus:border-[#22c55e] transition-all font-bold text-sm"
                    />
                </div>
                <div className="flex gap-2 bg-white p-1 rounded-xl border border-gray-100 shadow-sm">
                    {["All", "Pending", "Active", "Completed"].map(status => (
                        <button key={status} className="px-4 py-2 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-[#0f172a] transition-all">
                            {status}
                        </button>
                    ))}
                </div>
            </div>

            {/* Requests Table */}
            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-gray-50/50">
                        <tr className="border-b border-gray-100">
                            <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Client & ID</th>
                            <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Hardware</th>
                            <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Urgency</th>
                            <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
                            <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {requests.map(req => (
                            <tr
                                key={req.id}
                                className="hover:bg-gray-50/50 transition-colors group cursor-pointer"
                                onClick={() => setSelectedRequest(req)}
                            >
                                <td className="px-8 py-6">
                                    <div className="font-bold text-gray-900">{req.customer}</div>
                                    <div className="text-[10px] font-black text-[#22c55e] uppercase tracking-widest mt-1">{req.id}</div>
                                </td>
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">
                                            <Printer size={16} />
                                        </div>
                                        <span className="text-sm font-medium text-gray-600">{req.product}</span>
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <div className={`text-[10px] font-black uppercase tracking-widest ${req.urgency === 'Critical' ? 'text-red-500' :
                                            req.urgency === 'Urgent' ? 'text-amber-500' :
                                                'text-blue-500'
                                        }`}>
                                        {req.urgency}
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest inline-block ${req.status === 'Completed' ? 'bg-green-50 text-green-600' :
                                            req.status === 'In Progress' ? 'bg-blue-50 text-blue-600' :
                                                'bg-amber-50 text-amber-600'
                                        }`}>
                                        {req.status}
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <button className="p-2 text-gray-300 hover:text-[#0f172a] transition-all">
                                        <ExternalLink size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Details Modal */}
            {selectedRequest && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white rounded-[2.5rem] max-w-2xl w-full shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-300">
                        <div className="absolute top-0 left-0 w-full h-2 bg-[#22c55e]" />

                        <div className="p-10">
                            <div className="flex justify-between items-start mb-10">
                                <div>
                                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Service Request</div>
                                    <h3 className="text-3xl font-black text-[#0f172a]">{selectedRequest.id}</h3>
                                </div>
                                <button onClick={() => setSelectedRequest(null)} className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-gray-900">
                                    <ExternalLink size={20} className="rotate-45" />
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-10 mb-10">
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="p-2 bg-indigo-50 text-[#4f46e5] rounded-xl shrink-0"><Printer size={20} /></div>
                                        <div>
                                            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Hardware</div>
                                            <div className="text-sm font-bold">{selectedRequest.product}</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="p-2 bg-green-50 text-[#22c55e] rounded-xl shrink-0"><Clock size={20} /></div>
                                        <div>
                                            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Logged Date</div>
                                            <div className="text-sm font-bold">{selectedRequest.date}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="p-2 bg-amber-50 text-[#f59e0b] rounded-xl shrink-0"><Phone size={20} /></div>
                                        <div>
                                            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Contact</div>
                                            <div className="text-sm font-bold">{selectedRequest.customer}</div>
                                            <div className="text-xs text-gray-400 font-medium">{selectedRequest.phone}</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="p-2 bg-red-50 text-red-500 rounded-xl shrink-0"><AlertCircle size={20} /></div>
                                        <div>
                                            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Urgency</div>
                                            <div className="text-sm font-bold">{selectedRequest.urgency}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-2xl mb-10">
                                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Client Provided Diagnostic</div>
                                <p className="text-sm text-gray-600 font-medium leading-relaxed italic">"{selectedRequest.issue}"</p>
                            </div>

                            <div className="flex gap-4">
                                <button className="flex-1 bg-[#22c55e] text-white py-4 rounded-xl font-bold hover:bg-[#16a34a] shadow-lg shadow-green-100 flex items-center justify-center gap-2">
                                    <CheckCircle2 size={18} /> Mark Completed
                                </button>
                                <button className="px-6 bg-red-50 text-red-500 rounded-xl font-bold hover:bg-red-100 transition-colors flex items-center justify-center gap-2">
                                    <Trash2 size={18} /> Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
