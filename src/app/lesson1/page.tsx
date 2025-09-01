import React from 'react';
// import Sidebar from '@/components/Sidebar';

// --- Icon Components ---
const HeartIcon = () => <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path></svg>;
const LayersIcon = () => <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>;
const ValveIcon = () => <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"></path></svg>;
const ZapIcon = () => <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>;
const ActivityIcon = () => <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>;
const WaveIcon = () => <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h4l3 8 4-16 3 8h4"></path></svg>;
const DropletIcon = () => <svg className="w-8 h-8 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2.69l5.66 5.66a8 8 0 11-11.32 0L12 2.69z"></path></svg>;
const CycleIcon = () => <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h5M20 20v-5h-5M4 4l16 16"></path></svg>;
const GaugeIcon = () => <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;

// --- Type Definitions for Props ---
interface CardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

interface KeyTakeawayItemProps {
  children: React.ReactNode;
}

// --- Reusable Components ---
const Card: React.FC<CardProps> = ({ title, icon, children, className = '' }) => (
    <div className={`bg-white p-6 rounded-2xl shadow-lg border border-gray-200/80 transform hover:-translate-y-1 transition-transform duration-300 ${className}`}>
        <div className="flex items-center mb-4">
            {icon}
            <h2 className="text-2xl font-bold text-gray-800 ml-4">{title}</h2>
        </div>
        <div className="text-gray-700 space-y-3 text-lg">
            {children}
        </div>
    </div>
);

const KeyTakeawayItem: React.FC<KeyTakeawayItemProps> = ({ children }) => (
    <li className="flex items-start">
        <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
        <span>{children}</span>
    </li>
);

const Lesson1 = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* <Sidebar /> */}
      <main className="flex-1 p-8 overflow-y-auto bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          
          <header className="mb-12 text-center">
            <h1 className="text-6xl font-extrabold text-gray-900 mb-3 tracking-tight">Cardiovascular Ana-Phy</h1>
            <p className="text-2xl text-gray-500">A Deep Dive into the Heart's Core Functions</p>
          </header>

          <div className="mb-12 bg-white p-8 rounded-2xl shadow-2xl border border-purple-200/50">
            <h2 className="text-3xl font-bold text-purple-700 mb-4 flex items-center"><svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M4 17v4M2 19h4M17 3v4M15 5h4M18 17v4M16 19h4M12 9v12M9 12h6"></path></svg>Key Takeaways</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 text-lg text-gray-800">
              <KeyTakeawayItem>The heart is a muscular organ in the mediastinum.</KeyTakeawayItem>
              <KeyTakeawayItem>It has 3 layers (Endocardium, Myocardium, Epicardium) and is encased in the pericardium.</KeyTakeawayItem>
              <KeyTakeawayItem>The SA node is the primary pacemaker, firing at 60–100 bpm.</KeyTakeawayItem>
              <KeyTakeawayItem>Cardiac Output (CO) is the product of Heart Rate (HR) and Stroke Volume (SV).</KeyTakeawayItem>
              <KeyTakeawayItem>Starling’s law: a greater stretch on the cardiac muscle results in a stronger contraction.</KeyTakeawayItem>
              <KeyTakeawayItem>The cardiac cycle involves systole (contraction) and diastole (relaxation) of the atria and ventricles.</KeyTakeawayItem>
            </ul>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <Card title="HEART as an ORGAN" icon={<HeartIcon />} className="lg:col-span-2">
              <ul className="list-disc list-inside space-y-2">
                <li><span className="font-semibold">Description:</span> Hollow, muscular organ.</li>
                <li><span className="font-semibold">Location:</span> Rests on the diaphragm in the mediastinum.</li>
                <li><span className="font-semibold">Position:</span> About two-thirds of its mass is to the left of the body’s midline.</li>
                <li><span className="font-semibold">Anatomy:</span> Apex (pointed inferior part) and Base (broad superior part).</li>
                <li><span className="font-semibold">Influences on Size/Weight:</span> Age, gender, body weight, and physical exercise.</li>
              </ul>
            </Card>

            <Card title="HEART WALL" icon={<LayersIcon />}>
              <ul className="list-disc list-inside space-y-2">
                  <li><span className="font-semibold">Three Layers:</span> Endocardium, Myocardium, Epicardium.</li>
                  <li><span className="font-semibold">Pericardium:</span> Encased by Fibrous, Serous, Visceral, and Parietal layers.</li>
                  <li><span className="font-semibold">Pericardial Fluid:</span> ~20 ml for lubrication and friction reduction.</li>
              </ul>
            </Card>

            <Card title="HEART CHAMBERS AND VALVES" icon={<ValveIcon />} className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-xl text-gray-800 mb-2">Atrioventricular valves</h3>
                  <ul className="space-y-2">
                    <li><span className="font-semibold text-green-700">Tricuspid valve</span></li>
                    <li><span className="font-semibold text-green-700">Bicuspid (Mitral) valve</span></li>
                  </ul>
                </div>
                <div className="border-t md:border-t-0 md:border-l border-gray-200 pl-6 pt-6 md:pt-0">
                  <h3 className="font-semibold text-xl text-gray-800 mb-2">Semilunar valves</h3>
                  <ul className="space-y-2">
                    <li><span className="font-semibold text-green-700">Pulmonary valve</span></li>
                    <li><span className="font-semibold text-green-700">Aortic valve</span></li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card title="REVIEW OF ELECTROPHYSIOLOGY" icon={<ZapIcon />}>
              <p>The cardiac conduction system generates and transmits electrical impulses that stimulate contraction of the myocardium.</p>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Sequence of contraction:</h3>
              <ul className="list-disc list-inside">
                <li>Atria</li>
                <li>Ventricles</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">CHARACTERISTICS OF ELECTRIC CELLS:</h3>
              <ul className="list-disc list-inside">
                <li><span className="font-semibold">Automaticity:</span> “initiation”</li>
                <li><span className="font-semibold">Excitability:</span> “response”</li>
                <li><span className="font-semibold">Conductivity:</span> “transmission”</li>
              </ul>
            </Card>

            <Card title="PACEMAKER SITE RATE" icon={<ActivityIcon />}>
              <ul className="space-y-2">
                <li><span className="font-semibold">SA node:</span> 60–100 bpm</li>
                <li><span className="font-semibold">AV junction:</span> 40–60 bpm</li>
                <li><span className="font-semibold">Bundle branches:</span> 30–40 bpm</li>
                <li><span className="font-semibold">Purkinje network:</span> 30–40 bpm</li>
              </ul>
            </Card>

            <Card title="CARDIAC ACTION POTENTIAL" icon={<WaveIcon />}>
              <p><span className="font-semibold">Pre-contraction (resting/polarized state):</span> Na+ = primary extracellular cation, K+ = primary intracellular cation. Intracellular is negative, extracellular is positive.</p>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Phases of Action Potential (0–4):</h3>
              <ol className="list-decimal list-inside space-y-1">
                <li><span className="font-semibold">Phase 0:</span> Rapid depolarization (Na+ influx in myocytes; Ca++ influx in SA/AV nodal cells)</li>
                <li><span className="font-semibold">Phase 1:</span> Early repolarization (K+ efflux)</li>
                <li><span className="font-semibold">Phase 2:</span> Plateau phase (Ca++ influx slows repolarization)</li>
                <li><span className="font-semibold">Phase 3:</span> Final repolarization (cell returns to resting state)</li>
                <li><span className="font-semibold">Phase 4:</span> Resting phase (ready for next depolarization)</li>
              </ol>
            </Card>

            <Card title="HEMODYNAMICS" icon={<DropletIcon />}>
              <p>Pressure gradient causes blood to flow. Chamber pressures cause valves to open or close.</p>
              <ul className="list-disc list-inside mt-2">
                <li><span className="font-semibold">High ventricular pressure (systole):</span> AV valves close, SL valves open</li>
                <li><span className="font-semibold">Low ventricular pressure (diastole):</span> SL valves close, AV valves open</li>
              </ul>
            </Card>

            <Card title="CARDIAC CYCLE" icon={<CycleIcon />}>
              <p><span className="font-semibold">Atrial systole – Ventricular diastole</span></p>
              <p><span className="font-semibold">Atrial diastole – Ventricular systole</span></p>
              <p><span className="font-semibold">Relaxation period</span></p>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Details:</h3>
              <ul className="list-disc list-inside">
                <li><span className="font-semibold">Atrial systole (0.1 sec):</span> Atria contract, force blood through open AV valves. Adds 25 mL to 105 mL already in ventricles. EDV ≈ 130 mL.</li>
                <li><span className="font-semibold">Ventricular systole (0.3 sec):</span> Ventricles contract, close AV valves. LV/RV ejects ~70 mL into aorta/pulmonary artery. ESV ≈ 60 mL.</li>
                <li><span className="font-semibold">Ventricular diastole (0.4 sec):</span> Ventricular relaxation.</li>
              </ul>
            </Card>

            <Card title="CARDIAC OUTPUT (CO)" icon={<GaugeIcon />}>
              <p className="font-bold text-xl">CO = HR × SV</p>
              <p><span className="font-semibold">Stroke Volume (SV):</span> ~70 mL/beat</p>
              <p><span className="font-semibold">Example:</span> HR = 75 bpm × SV = 70 mL → CO ≈ 5250 mL/min</p>
              <ul className="list-disc list-inside mt-2">
                <li><span className="font-semibold">Starling’s law:</span> more stretch = stronger contraction</li>
                <li>HR is the most common way to change CO</li>
              </ul>
            </Card>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Lesson1;