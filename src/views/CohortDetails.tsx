import React from 'react';
import { Download, Plus, Verified, Filter, ArrowUpDown, Mail, MoreHorizontal } from 'lucide-react';

export const CohortDetails: React.FC<{ onNavigate?: (view: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500 pt-8 pb-12 max-w-7xl mx-auto xl:mx-0">
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="font-headline text-4xl font-extrabold text-on-surface tracking-tight mb-2">KHMT 2023.2 Cohort</h2>
          <p className="text-on-surface-variant font-medium text-lg max-w-2xl">Computer Science & Information Technology | University of Information Technology</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center px-6 py-3 bg-white rounded-full text-primary font-bold text-sm shadow-sm hover:shadow-md transition-all border border-slate-200 cursor-pointer">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </button>
          <button className="flex items-center px-6 py-3 bg-gradient-to-r from-primary to-primary-container text-white rounded-full font-bold text-sm shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer">
            <Plus className="w-4 h-4 mr-2 stroke-[3px]" />
            Enroll Student
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-[0_20px_40px_rgba(0,74,198,0.04)] border border-slate-100 relative overflow-hidden group">
          <div className="absolute -right-6 -top-6 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-110 transition-transform duration-700 pointer-events-none"></div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 block">Total Students</span>
          <div className="flex items-baseline space-x-2">
            <span className="text-4xl font-serif font-black text-slate-900">70</span>
            <span className="text-xs font-bold text-primary tracking-wide">+4 this sem</span>
          </div>
          <div className="mt-8 h-1.5 w-full bg-slate-100 rounded-full">
            <div className="h-full w-3/4 bg-primary rounded-full"></div>
          </div>
        </div>
        
        <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-[0_20px_40px_rgba(0,74,198,0.04)] border border-slate-100 relative overflow-hidden group">
          <div className="absolute -right-6 -top-6 w-32 h-32 bg-secondary/5 rounded-full group-hover:scale-110 transition-transform duration-700 pointer-events-none"></div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 block">Average GPA</span>
          <div className="flex items-baseline space-x-2">
            <span className="text-4xl font-serif font-black text-slate-900">3.42</span>
            <span className="text-xs font-bold text-green-600 tracking-wide">↑ 0.12</span>
          </div>
          <div className="mt-8 flex gap-1.5 items-end h-3">
            <div className="h-4 w-1.5 flex-1 bg-primary/20 rounded-full"></div>
            <div className="h-6 w-1.5 flex-1 bg-primary/40 rounded-full"></div>
            <div className="h-8 w-1.5 flex-1 bg-primary cursor-pointer rounded-full hover:bg-primary-container"></div>
            <div className="h-5 w-1.5 flex-1 bg-primary/60 rounded-full"></div>
          </div>
        </div>
        
        <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-[0_20px_40px_rgba(0,74,198,0.04)] border border-slate-100 relative overflow-hidden group">
          <div className="absolute -right-6 -top-6 w-32 h-32 bg-tertiary/5 rounded-full group-hover:scale-110 transition-transform duration-700 pointer-events-none"></div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 block">Graduation Year</span>
          <div className="flex items-baseline space-x-2">
            <span className="text-4xl font-serif font-black text-slate-900">2027</span>
          </div>
          <p className="text-xs text-slate-500 mt-6 font-semibold tracking-wide">Standard 4-year track</p>
        </div>
        
        <div className="bg-gradient-to-br from-primary to-primary-container p-8 rounded-[2rem] shadow-xl text-white relative overflow-hidden lg:col-span-1 md:col-span-2 group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none"></div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 mb-4 block">Cohort Health</span>
          <div className="flex items-center space-x-3 mb-8">
            <span className="text-3xl font-serif font-black">Stable</span>
            <Verified className="w-8 h-8 text-white flex-shrink-0" fill="currentColor" opacity="0.2" />
          </div>
          <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden mb-3">
            <div className="bg-white h-full w-[88%] shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
          </div>
          <p className="text-[11px] font-medium opacity-90 leading-snug tracking-wide">88% of students are "On Track" or "Excellence"</p>
        </div>
      </section>

      <section className="flex flex-col sm:flex-row items-center justify-between gap-4 py-2">
        <div className="flex items-center gap-1 bg-surface-container-high/30 p-1.5 rounded-2xl border border-slate-200/50">
          <button className="px-5 py-2.5 bg-white text-primary font-bold text-xs rounded-xl shadow-sm cursor-pointer">All Students</button>
          <button className="px-5 py-2.5 text-slate-500 font-bold text-xs rounded-xl hover:text-slate-800 hover:bg-white/50 transition-colors cursor-pointer">At Risk (5)</button>
          <button className="px-5 py-2.5 text-slate-500 font-bold text-xs rounded-xl hover:text-slate-800 hover:bg-white/50 transition-colors cursor-pointer">Excellence (12)</button>
        </div>
        <div className="flex items-center space-x-6">
          <button className="flex items-center text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors cursor-pointer">
            <Filter className="w-4 h-4 mr-1.5" /> Filter
          </button>
          <button className="flex items-center text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors cursor-pointer">
            <ArrowUpDown className="w-4 h-4 mr-1.5" /> Sort by GPA
          </button>
        </div>
      </section>

      <section className="bg-surface-container-lowest rounded-[2rem] shadow-[0_20px_40px_rgba(0,74,198,0.04)] border border-slate-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100/80">
              <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">Student Name</th>
              <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">Student ID</th>
              <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">GPA</th>
              <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-400 text-center">Status</th>
              <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-400 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[
              { name: 'Hoang Phuc Nguyen', email: 'phuc.nh23@uit.edu.vn', id: '23520104', gpa: '3.92', status: 'Excellence', bg: 'bg-green-100', text: 'text-green-700', bar: 'bg-green-500', width: '98%', img: 12 },
              { name: 'Thanh Hang Le', email: 'hang.lt23@uit.edu.vn', id: '23520082', gpa: '3.45', status: 'On Track', bg: 'bg-blue-100', text: 'text-blue-700', bar: 'bg-primary', width: '85%', img: 5 },
              { name: 'Minh Quan Tran', email: 'quan.tm23@uit.edu.vn', id: '23520115', gpa: '2.10', status: 'At Risk', bg: 'bg-red-100', text: 'text-red-700', bar: 'bg-error', width: '45%', img: 33 },
              { name: 'Bao Ngoc Pham', email: 'ngoc.pb23@uit.edu.vn', id: '23520140', gpa: '3.78', status: 'Excellence', bg: 'bg-green-100', text: 'text-green-700', bar: 'bg-green-500', width: '90%', img: 21 },
            ].map((student, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors group">
                <td className="px-8 py-5">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-2xl overflow-hidden bg-slate-200 shadow-sm ring-2 ring-transparent group-hover:ring-primary/10 transition-all">
                      <img src={`https://i.pravatar.cc/100?img=${student.img}`} alt={student.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{student.name}</p>
                      <p className="text-[11px] text-slate-500 font-semibold tracking-wide">{student.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5 text-sm font-semibold text-slate-600 font-mono tracking-tight">{student.id}</td>
                <td className="px-6 py-5">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-bold text-slate-900 w-8">{student.gpa}</span>
                    <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full ${student.bar} rounded-full`} style={{ width: student.width }}></div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5 text-center">
                  <span className={`px-3.5 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-widest ${student.bg} ${student.text}`}>{student.status}</span>
                </td>
                <td className="px-8 py-5 text-right">
                  <div className="flex items-center justify-end space-x-3">
                    <button 
                      onClick={() => onNavigate && onNavigate('messages')}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-xl text-xs font-bold hover:bg-primary hover:text-white transition-all flex items-center shadow-sm cursor-pointer"
                    >
                      <Mail className="w-3.5 h-3.5 mr-1.5" />
                      Message
                    </button>
                    <button className="p-2 text-slate-400 hover:text-primary transition-colors hover:bg-slate-100 rounded-lg cursor-pointer">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="p-6 md:p-8 flex items-center justify-between border-t border-slate-100 bg-slate-50/50">
          <p className="text-xs font-semibold text-slate-500 tracking-wide">Showing 1-4 of 70 students</p>
          <div className="flex space-x-2">
            <button className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 text-slate-400 hover:bg-white hover:text-primary hover:border-primary/30 transition-all cursor-pointer">
              <span className="material-symbols-outlined text-sm">chevron_left</span>
            </button>
            <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary text-white text-xs font-bold shadow-md cursor-pointer">1</button>
            <button className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 text-slate-600 hover:bg-white hover:text-primary hover:border-primary/30 transition-all text-xs font-bold cursor-pointer">2</button>
            <button className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 text-slate-600 hover:bg-white hover:text-primary hover:border-primary/30 transition-all text-xs font-bold cursor-pointer">3</button>
            <button className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 text-slate-400 hover:bg-white hover:text-primary hover:border-primary/30 transition-all cursor-pointer">
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
