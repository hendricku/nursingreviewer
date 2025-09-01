import React from 'react';
// import Sidebar from '@/components/Sidebar';

// --- Icon Components (reused from Lesson1) ---
const HeartIcon = () => <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path></svg>;
const ValveIcon = () => <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"></path></svg>;
const ZapIcon = () => <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>;
const ActivityIcon = () => <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>;
const DropletIcon = () => <svg className="w-8 h-8 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2.69l5.66 5.66a8 8 0 11-11.32 0L12 2.69z"></path></svg>;
const GaugeIcon = () => <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;
const ECGIcon = () => <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m2 3H7m6 0h2m-4 0h2m-6 0h2m-2 4h4m-4 0h2m-2 0h2m4-4h2m-2 0h2m-4 0h2M12 3v18M4 7h16M4 17h16" /></svg>; // Custom icon for ECG
const HelpCircleIcon = () => <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>;
const HeartPulseIcon = () => <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/><path d="M3.5 12h.01"/><path d="M7.5 8h.01"/><path d="M16.5 8h.01"/><path d="M20.5 12h.01"/></svg>;

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

const Lesson2 = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* <Sidebar /> */}
      <main className="flex-1 p-8 overflow-y-auto bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-7xl mx-auto">
          
          <header className="mb-12 text-center">
            <h1 className="text-6xl font-extrabold text-gray-900 mb-3 tracking-tight">Cardiac Dysrhythmias</h1>
            <p className="text-2xl text-gray-500">Understanding Abnormal Heart Rhythms</p>
          </header>

          <div className="mb-12 bg-white p-8 rounded-2xl shadow-2xl border border-red-200/50">
            <h2 className="text-3xl font-bold text-red-700 mb-4 flex items-center"><ECGIcon />Key Takeaways</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 text-lg text-gray-800">
              <KeyTakeawayItem>Dysrhythmias are abnormal heart rhythms due to electrical impulse changes.</KeyTakeawayItem>
              <KeyTakeawayItem>ECG records electrical activity, showing P, QRS, and T waves.</KeyTakeawayItem>
<KeyTakeawayItem>Types include Sinus, Atrial, Junctional, Ventricular, and Heart Blocks.</KeyTakeawayItem>
<KeyTakeawayItem>Sinus Tachycardia is HR {'>'} 100 bpm; Sinus Bradycardia is HR {'<'} 60 bpm.</KeyTakeawayItem>
<KeyTakeawayItem>Atrial Fibrillation is irregularly irregular with no distinct P waves.</KeyTakeawayItem>
              <KeyTakeawayItem>Ventricular Fibrillation is chaotic and life-threatening, requiring immediate CPR and defibrillation.</KeyTakeawayItem>
            </ul>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <Card title="Cardiac Dysrhythmias" icon={<HeartIcon />} className="lg:col-span-2">
              <p>Abnormal heart rhythms caused by changes in electrical impulses that coordinate heartbeats. Also known as arrhythmias.</p>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Types</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Tachycardia</li>
                <li>Bradycardia</li>
                <li>Atrial Fibrillation – Irregular, often rapid atrial rhythm</li>
                <li>Ventricular Fibrillation – Disorganized ventricular rhythm, life-threatening</li>
                <li>Premature Beats – Early heartbeats from atria or ventricles</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Causes</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Coronary artery disease</li>
                <li>Electrolyte imbalance</li>
                <li>Heart injury or surgery</li>
                <li>Medications or stimulants</li>
                <li>Stress, alcohol, smoking</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Symptoms</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Palpitations</li>
                <li>Dizziness or fainting</li>
                <li>Chest pain</li>
                <li>Shortness of breath</li>
                <li>Fatigue</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Management</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Medications (antiarrhythmics, beta-blockers)</li>
                <li>Electrical therapy (cardioversion, pacemaker, defibrillator)</li>
                <li>Lifestyle modifications</li>
                <li>Ablation therapy</li>
              </ul>
            </Card>

            <Card title="Electrocardiogram (ECG)" icon={<ECGIcon />}>
              <p>A test that records the electrical activity of the heart to assess rhythm, rate, and cardiac health.</p>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Key Components</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>P Wave – Atrial depolarization</li>
                <li>QRS Complex – Ventricular depolarization</li>
                <li>T Wave – Ventricular repolarization</li>
                <li>PR Interval – Time from atrial to ventricular activation</li>
                <li>ST Segment – Time between depolarization and repolarization</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Indications</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Chest pain or palpitations</li>
                <li>Suspected arrhythmias</li>
                <li>Monitoring after MI or surgery</li>
                <li>Pre-operative screening</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Interpretation</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Rate – Normal: 60–100 bpm</li>
                <li>Rhythm – Regular or irregular</li>
                <li>Axis – Direction of electrical activity</li>
                <li>Wave abnormalities – May indicate ischemia, infarction, hypertrophy, or electrolyte imbalance</li>
              </ul>
            </Card>

            <Card title="Types of Cardiac Dysrhythmias" icon={<GaugeIcon />} className="lg:col-span-3">
              <h3 className="font-semibold text-xl text-gray-800 mb-2">1. Sinus Dysrhythmias</h3>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Sinus Tachycardia – HR {'>'} 100 bpm</li>
                <li>Sinus Bradycardia – HR {'<'} 60 bpm</li>
                <li>Sinus Arrhythmia – Irregular rhythm, often related to breathing</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mb-2">2. Atrial Dysrhythmias</h3>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Atrial Fibrillation (AFib) – Irregular, chaotic atrial activity</li>
                <li>Atrial Flutter – Rapid, regular atrial rhythm (sawtooth waves)</li>
                <li>Supraventricular Tachycardia (SVT) – Fast rhythm from above the ventricles</li>
                <li>Premature Atrial Contractions (PACs) – Early atrial beats</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mb-2">3. Junctional Dysrhythmias</h3>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Junctional Rhythm – Impulse originates near AV node</li>
                <li>Accelerated Junctional Rhythm – Faster rate than normal junctional rhythm</li>
                <li>Premature Junctional Complexes (PJCs) – Early beats from AV junction</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mb-2">4. Ventricular Dysrhythmias</h3>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Premature Ventricular Contractions (PVCs) – Early ventricular beats</li>
                <li>Ventricular Tachycardia (VTach) – Fast, wide QRS complex rhythm</li>
                <li>Ventricular Fibrillation (VFib) – Chaotic, uncoordinated electrical activity</li>
                <li>Torsades de Pointes – Polymorphic VT, often drug-induced</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mb-2">5. Heart Blocks (AV Blocks)</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>First-Degree Block – Prolonged PR interval</li>
                <li>Second-Degree Block - Type I (Wenckebach) – Progressive PR lengthening</li>
                <li>Second-Degree Block - Type II – Intermittent dropped beats</li>
                <li>Third-Degree Block (Complete Block) – No atrial-ventricular conduction</li>
              </ul>
            </Card>

<Card title="Sinus Tachycardia" icon={<ActivityIcon />}>
<p>A normal rhythm originating from the sinoatrial (SA) node with a heart rate {'>'}100 bpm (in adults).</p>
<h3 className="font-semibold text-xl text-gray-800 mt-4">ECG Characteristics</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Regular rhythm</li>
                <li>HR: 100–150 bpm</li>
                <li>Normal P waves before every QRS</li>
                <li>PR interval and QRS duration: Normal</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Causes</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Fever, Pain, Anxiety/stress, Exercise</li>
                <li>Hypovolemia, Anemia, Hyperthyroidism</li>
                <li>Stimulants (e.g., caffeine, nicotine)</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Symptoms</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Palpitations, Dizziness, Shortness of breath</li>
                <li>May be asymptomatic</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Management</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Treat underlying cause (e.g., fluids, pain relief)</li>
                <li>Beta-blockers or calcium channel blockers in symptomatic patients</li>
                <li>Monitor vitals and ECG</li>
              </ul>
            </Card>

<Card title="Sinus Bradycardia" icon={<ActivityIcon />}>
<p>A normal rhythm from the sinoatrial (SA) node with a heart rate {'<'}60 bpm in adults.</p>
<h3 className="font-semibold text-xl text-gray-800 mt-4">ECG Characteristics</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Regular rhythm</li>
                <li>HR: &lt;60 bpm</li>
                <li>Normal P waves before each QRS</li>
                <li>PR interval and QRS duration: Normal</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Causes</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Normal in athletes or during sleep</li>
                <li>Hypothyroidism, Hypothermia, Increased vagal tone</li>
                <li>Medications (e.g., beta-blockers, digoxin)</li>
                <li>Myocardial infarction (especially inferior wall)</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Symptoms</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Often asymptomatic</li>
                <li>Dizziness, Fatigue, Syncope (fainting), Hypotension</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Management</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Asymptomatic: Observe</li>
                <li>Symptomatic: Atropine IV, Pacemaker if persistent, Stop or adjust causative medications</li>
              </ul>
            </Card>

            <Card title="Sinus Arrhythmia" icon={<ActivityIcon />}>
              <p>Often called Sinus Respiratory Arrhythmia. A normal irregularity in heart rhythm originating from the SA node, often related to the respiratory cycle.</p>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">ECG Characteristics</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Irregular rhythm</li>
                <li>HR: Typically 60–100 bpm</li>
                <li>P waves: Normal, consistent shape</li>
                <li>Variation in RR intervals (shorter during inspiration, longer during expiration)</li>
                <li>PR interval and QRS: Normal</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Causes</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Common in children and young adults</li>
                <li>Influenced by vagal tone</li>
                <li>Seen during normal breathing</li>
                <li>Can also occur with medications or increased intracranial pressure</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Symptoms</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Usually asymptomatic</li>
                <li>Detected incidentally on ECG</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Management</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>No treatment needed</li>
                <li>Reassure patient – considered benign</li>
                <li>Rule out pathological causes if symptoms are present</li>
              </ul>
            </Card>

            <Card title="Atrial Fibrillation (AFib)" icon={<ZapIcon />}>
              <p>A common supraventricular arrhythmia characterized by disorganized atrial electrical activity, leading to an irregularly irregular rhythm. Irregular, chaotic atrial activity.</p>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">ECG Characteristics</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>No distinct P waves</li>
                <li>Irregularly irregular RR intervals</li>
                <li>Narrow QRS complexes</li>
                <li>Variable ventricular rate</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Causes</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Hypertension, Coronary artery disease, Heart failure</li>
                <li>Valvular disease, Hyperthyroidism, Alcohol (&quot;holiday heart&quot;)</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Symptoms</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Palpitations, Fatigue, Dizziness, Dyspnea</li>
                <li>May be asymptomatic</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Management</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Rate control: Beta-blockers, calcium channel blockers</li>
                <li>Rhythm control: Antiarrhythmics, cardioversion</li>
                <li>Anticoagulation: To reduce stroke risk (based on CHA2DS2-VASc score)</li>
                <li>Ablation: In selected patients</li>
              </ul>
            </Card>

            <Card title="Atrial Flutter" icon={<ZapIcon />}>
              <p>A type of supraventricular tachycardia caused by a reentrant circuit in the atria, leading to a rapid, regular atrial rate (usually ~250–350 bpm). Rapid, regular atrial rhythm (&quot;sawtooth&quot; waves).</p>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Causes</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Heart failure, Valvular heart disease, Post-cardiac surgery</li>
                <li>COPD, Alcohol use</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Symptoms</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Palpitations, Fatigue, Lightheadedness, Dyspnea</li>
                <li>May be asymptomatic</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">ECG Characteristics</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>"Sawtooth" flutter waves (especially in leads II, III, aVF)</li>
                <li>Regular atrial activity</li>
                <li>Ventricular rate often regular (e.g., 2:1, 3:1 conduction)</li>
                <li>Narrow QRS unless preexisting block</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Management</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Rate control: Beta-blockers or calcium channel blockers</li>
                <li>Rhythm control: Cardioversion or antiarrhythmics</li>
                <li>Anticoagulation: To prevent thromboembolism</li>
                <li>Catheter ablation: Often curative</li>
              </ul>
            </Card>

            <Card title="Supraventricular Tachycardia (SVT)" icon={<ZapIcon />}>
              <p>A rapid heart rhythm originating above the ventricles, usually with a narrow QRS complex and a regular rhythm. Fast rhythm from above the ventricles.</p>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">ECG Characteristics</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Regular rhythm</li>
                <li>HR: 150–250 bpm</li>
                <li>Narrow QRS complexes</li>
                <li>P waves may be hidden or inverted (retrograde)</li>
                <li>Sudden onset and termination</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Causes</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Stress or anxiety, Caffeine or stimulants</li>
                <li>Hyperthyroidism, Structural heart disease</li>
                <li>WPW syndrome (in AVRT type)</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Symptoms</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Palpitations, Dizziness, Chest discomfort</li>
                <li>Shortness of breath, Syncope (in severe cases)</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Management</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Vagal maneuvers (e.g., Valsalva)</li>
                <li>Adenosine IV (first-line drug)</li>
                <li>Beta-blockers / calcium channel blockers</li>
                <li>Catheter ablation for recurrent SVT</li>
              </ul>
            </Card>

            <Card title="Premature Atrial Contractions (PACs)" icon={<ZapIcon />}>
              <p>Early atrial beats that originate outside the SA node, interrupting the normal rhythm temporarily.</p>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">ECG Characteristics</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Early P wave (often abnormal shape)</li>
                <li>Normal QRS complex follows</li>
                <li>Compensatory pause may occur</li>
                <li>Rhythm: Irregular due to premature beat</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Causes</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Stress, anxiety, Caffeine, alcohol, nicotine</li>
                <li>Electrolyte imbalance, Hypoxia, Myocardial ischemia</li>
                <li>Seen in healthy individuals too</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Symptoms</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Often asymptomatic</li>
                <li>May feel like palpitations or "skipped beats"</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Management</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Usually no treatment needed</li>
                <li>Address triggers (e.g., reduce caffeine/stress)</li>
                <li>Beta-blockers if symptomatic or frequent</li>
                <li>Investigate if structural heart disease is suspected</li>
              </ul>
            </Card>

            <Card title="Junctional Rhythm" icon={<ValveIcon />}>
              <p>A rhythm originating from the atrioventricular (AV) junction when the SA node fails or conduction is blocked.</p>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">ECG Characteristics</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Heart rate: 40–60 bpm (intrinsic AV node rate)</li>
                <li>Regular rhythm</li>
                <li>P waves: Absent, inverted, or occur after QRS</li>
                <li>QRS complex: Normal width</li>
                <li>PR interval: Absent or shortened if visible</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Causes</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>SA node dysfunction, Myocardial infarction (especially inferior)</li>
                <li>Digitalis toxicity, Post-cardiac surgery, Electrolyte disturbances</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Symptoms</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Often asymptomatic if rate adequate</li>
                <li>May experience dizziness, fatigue, or hypotension if bradycardic</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Management</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Asymptomatic: Monitor</li>
                <li>Symptomatic: Atropine, Temporary pacing, Treat underlying cause (e.g., medication adjustment)</li>
              </ul>
            </Card>

            <Card title="Accelerated Junctional Rhythm" icon={<ValveIcon />}>
              <p>A rhythm originating from the AV junction with a rate faster than the intrinsic junctional rate (60–100 bpm) but slower than junctional tachycardia.</p>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">ECG Characteristics</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Rate: 60–100 bpm</li>
                <li>Rhythm: Regular</li>
                <li>P waves: Absent, inverted, or after QRS</li>
                <li>QRS: Normal width</li>
                <li>May resemble normal sinus rhythm but with abnormal P wave placement</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Causes</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Digitalis toxicity, Myocardial infarction (especially inferior)</li>
                <li>Post-cardiac surgery, Electrolyte imbalance</li>
                <li>Normal variant in children or athletes</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Symptoms</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Often asymptomatic</li>
                <li>May cause palpitations, dizziness, or fatigue</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Management</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Treat underlying cause (e.g., stop digoxin)</li>
                <li>Monitor if stable</li>
                <li>Rarely needs specific treatment unless hemodynamically unstable</li>
              </ul>
            </Card>

            <Card title="Premature Junctional Complexes (PJCs)" icon={<ValveIcon />}>
              <p>Early beats from AV junction, occurring before the next expected sinus beat.</p>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">ECG Characteristics</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Early, narrow QRS complex</li>
                <li>P wave: Absent, inverted, or occurs after QRS</li>
                <li>Compensatory pause may follow</li>
                <li>Rhythm: Irregular due to premature beat</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Causes</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Digitalis toxicity, Stimulants (caffeine, nicotine)</li>
                <li>Hypoxia, Electrolyte imbalance</li>
                <li>Myocardial ischemia or infarction</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Symptoms</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Usually asymptomatic</li>
                <li>May feel like a palpitation or "skipped beat"</li>
              </ul>
              <h3 className="font-semibold text-xl text-gray-800 mt-4">Management</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>No treatment if infrequent and asymptomatic</li>
                <li>Treat underlying cause</li>
                <li>Reduce triggers (e.g., caffeine, drugs)</li>
                <li>Monitor for progression to junctional rhythm</li>
              </ul>
            </Card>

            <Card title="Ventricular Dysrhythmias" icon={<DropletIcon />}>
              <p>Some ventricular dysrhythmias are indeed life-threatening. They can disrupt the heart's ability to pump blood effectively, leading to serious complications like cardiac arrest or sudden cardiac death.</p>
            </Card>

              <Card title="Common Causes of Arrhythmias" icon={<HelpCircleIcon />} className="lg:col-span-3">
              <ul className="list-disc list-inside space-y-2">
                <li>Myocardial infarction (heart attack), heart failure, cardiomyopathy</li>
                <li>Caffeine, alcohol, nicotine/stimulants, stress/anxiety, electrolyte imbalance (K+, Mg++)</li>
                <li>Hypoxia, acid-base imbalances, medications (e.g., digoxin, antiarrhythmics)</li>
                <li>Structural heart disease (e.g., valvular disorders)</li>
              </ul>
            </Card>

            <Card title="Treatment & Management" icon={<HeartPulseIcon />} className="lg:col-span-3">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-xl text-gray-800 mb-2">Lifestyle Modifications</h3>
                  <p>Avoid stimulants (caffeine, alcohol), manage sleep apnea, hypertension, etc.</p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="font-semibold text-xl text-gray-800 mb-2">Medications</h3>
                  <p>Rate/rhythm control (e.g., beta-blockers, calcium-channel blockers, anticoagulants in AFib)</p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="font-semibold text-xl text-gray-800 mb-2">Procedures & Devices</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Cardioversion (electrical &quot;reset&quot;)</li>
                    <li>Catheter ablation for supraventricular arrhythmias and AFib</li>
                    <li>Pacemakers for bradycardia; ICDs for ventricular tachycardia/fibrillation</li>
                  </ul>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Lesson2;