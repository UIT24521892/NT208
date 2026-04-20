import React, { useEffect, useState } from 'react';
import { TrendingDown } from 'lucide-react';
import { PieChart, Pie, Cell } from 'recharts';
import { AISupportWidget } from '../components/AISupportWidget';
import { supabase } from '../lib/supabase'; // Import client

export const Dashboard = () => {
  const [riskStudents, setRiskStudents] = useState<any[]>([]);

  useEffect(() => {
    async function fetchRiskStudents() {
      // Lấy 3 sinh viên bất kỳ làm ví dụ cho Red Flags
      const { data } = await supabase.from('students').select('*').limit(3);
      if (data) setRiskStudents(data);
    }
    fetchRiskStudents();
  }, []);

  const chartData = [
    { name: 'Excellent', value: 45, color: '#004ac6' },
    { name: 'Good', value: 30, color: '#2563eb' },
    { name: 'Average', value: 15, color: '#93c5fd' },
    { name: 'Poor', value: 10, color: '#ba1a1a' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12 max-w-6xl mx-auto xl:mx-0">
      {/* ... Giữ nguyên phần Tiêu đề ... */}

      <div className="grid grid-cols-12 gap-8">
        <section className="col-span-12 lg:col-span-7 bg-surface-container-lowest rounded-xl p-8 shadow-[0_20px_40px_rgba(0,74,198,0.04)] border border-slate-100">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-xl font-headline font-bold text-blue-900">Red Flags</h3>
              <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">At-Risk Student Monitoring</p>
            </div>
            <button className="text-primary text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity cursor-pointer">View All</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] uppercase tracking-widest text-slate-400 border-b border-surface-container/50">
                  <th className="pb-4 font-semibold">Student Name</th>
                  <th className="pb-4 font-semibold">Student ID</th>
                  <th className="pb-4 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {riskStudents.length === 0 ? (
                  <tr><td colSpan={3} className="py-4 text-slate-400">Loading DB...</td></tr>
                ) : (
                  riskStudents.map((s, i) => {
                    const initials = s.full_name.split(' ').map((n: string) => n[0]).join('').substring(0, 2);
                    return (
                      <tr key={s.id} className="group hover:bg-surface-container-low/50 transition-colors cursor-pointer">
                        <td className="py-4 font-semibold text-on-surface flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-error-container text-error flex items-center justify-center font-bold text-xs shadow-sm">
                            {initials}
                          </div>
                          {s.full_name}
                        </td>
                        <td className="py-4 text-slate-500 font-mono text-xs">{s.mssv}</td>
                        <td className="py-4">
                          <span className="inline-flex items-center px-2 py-1 bg-error-container/50 text-error rounded-full text-[10px] font-bold">
                            Review Required <TrendingDown className="w-3 h-3 ml-1" />
                          </span>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* ... Giữ nguyên các section biểu đồ bên dưới ... */}
      </div>
      <AISupportWidget />
    </div>
  );
};