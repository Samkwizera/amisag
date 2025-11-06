import React, { useMemo, useState } from 'react';

type Language = 'en' | 'fr' | 'sw';

type Profile = {
  name: string;
  email: string;
  phone: string;
  skills: string;
  interests: string;
  goals: string;
  preferredIndustries: string;
};

type Connection = {
  id: string;
  name: string;
  role: string;
  organisation: string;
  location: string;
  skills: string[];
  interests: string[];
  languages: Language[];
  summary: string;
};

type FeedbackEntry = {
  userId: string;
  action: 'accept' | 'decline' | 'skip';
  timestamp: string;
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    appTitle: 'Amisag Networking',
    onboardingTitle: 'Build your pan-African network',
    onboardingSubtitle: 'Tell us about you to unlock tailored opportunities.',
    nameLabel: 'Full name',
    emailLabel: 'Email',
    phoneLabel: 'Phone number',
    skillsLabel: 'Key skills',
    interestsLabel: 'Interests',
    goalsLabel: 'Goals',
    industriesLabel: 'Preferred industries',
    updateProfile: 'Save profile',
    matchmakingTitle: 'AI-powered connections',
    matchmakingSubtitle: 'Swipe through relevant people curated by our graph intelligence.',
    actionsHeading: 'Connection actions',
    accept: 'Accept',
    decline: 'Decline',
    skip: 'Skip',
    chatTitle: 'Messages & community',
    chatSubtitle: 'Stay in sync with 1:1 connections or collaborate in topic groups.',
    chatInputPlaceholder: 'Send an update to your mentor...',
    groupsTitle: 'Community spaces',
    adminTitle: 'Admin intelligence dashboard',
    adminSubtitle: 'Track engagement, growth, and platform health in real time.',
    activeUsers: 'Active users (30d)',
    retention: 'Engagement retention',
    introsCompleted: 'AI introductions completed',
    lowBandwidthTitle: 'Low-bandwidth access',
    lowBandwidthSubtitle: 'Reach members without smartphones via USSD or SMS.',
    ussdSteps: 'Dial *384*45# to explore matches or text "CONNECT" to 21212 for SMS prompts.',
    feedbackTitle: 'Recommendation feedback loop',
    feedbackEmpty: 'No interactions yet. Engage with matches to teach the AI.',
    languageLabel: 'Language',
    nextMatches: 'Next recommendations',
    analyticsOverview: 'Analytics overview',
    chatThreads: '1:1 mentorship',
    send: 'Send',
    profileUpdated: 'Profile updated! Fresh recommendations are ready below.'
  },
  fr: {
    appTitle: 'Réseau Amisag',
    onboardingTitle: 'Construisez votre réseau panafricain',
    onboardingSubtitle: 'Parlez-nous de vous pour débloquer des opportunités adaptées.',
    nameLabel: 'Nom complet',
    emailLabel: 'Email',
    phoneLabel: 'Numéro de téléphone',
    skillsLabel: 'Compétences clés',
    interestsLabel: 'Centres d\'intérêt',
    goalsLabel: 'Objectifs',
    industriesLabel: 'Secteurs préférés',
    updateProfile: 'Enregistrer le profil',
    matchmakingTitle: 'Connexions pilotées par l\'IA',
    matchmakingSubtitle: 'Faites défiler les profils pertinents sélectionnés par notre intelligence.',
    actionsHeading: 'Actions de connexion',
    accept: 'Accepter',
    decline: 'Refuser',
    skip: 'Ignorer',
    chatTitle: 'Messages & communauté',
    chatSubtitle: 'Restez connectés avec vos contacts ou collaborez dans les groupes.',
    chatInputPlaceholder: 'Envoyez une mise à jour à votre mentor...',
    groupsTitle: 'Espaces communautaires',
    adminTitle: 'Tableau de bord administratif',
    adminSubtitle: 'Suivez l\'engagement, la croissance et la santé du système en temps réel.',
    activeUsers: 'Utilisateurs actifs (30j)',
    retention: 'Rétention d\'engagement',
    introsCompleted: 'Introductions IA complétées',
    lowBandwidthTitle: 'Accès à faible bande passante',
    lowBandwidthSubtitle: 'Atteignez les membres sans smartphone via USSD ou SMS.',
    ussdSteps: 'Composez *384*45# pour explorer les correspondances ou envoyez "CONNECT" au 21212.',
    feedbackTitle: 'Boucle de rétroaction',
    feedbackEmpty: 'Aucune interaction pour le moment. Engagez-vous pour entraîner l\'IA.',
    languageLabel: 'Langue',
    nextMatches: 'Prochaines recommandations',
    analyticsOverview: 'Vue d\'ensemble analytique',
    chatThreads: 'Mentorat 1:1',
    send: 'Envoyer',
    profileUpdated: 'Profil mis à jour ! De nouvelles recommandations vous attendent.'
  },
  sw: {
    appTitle: 'Mtandao wa Amisag',
    onboardingTitle: 'Jenga mtandao wako wa Afrika',
    onboardingSubtitle: 'Tuambie kukuhusu ili upate nafasi maalum.',
    nameLabel: 'Jina kamili',
    emailLabel: 'Barua pepe',
    phoneLabel: 'Nambari ya simu',
    skillsLabel: 'Ujuzi muhimu',
    interestsLabel: 'Maslahi',
    goalsLabel: 'Malengo',
    industriesLabel: 'Sekta unazopendelea',
    updateProfile: 'Hifadhi wasifu',
    matchmakingTitle: 'Ulinganisho wa kiakili bandia',
    matchmakingSubtitle: 'Pitia watu muhimu waliopendekezwa na akili ya grafu.',
    actionsHeading: 'Vitendo vya muunganisho',
    accept: 'Kubali',
    decline: 'Kataa',
    skip: 'Ruka',
    chatTitle: 'Ujumbe & jamii',
    chatSubtitle: 'Baki hewani na mawasiliano ya 1:1 au ushirikiane kwenye makundi.',
    chatInputPlaceholder: 'Tuma ujumbe kwa mshauri wako...',
    groupsTitle: 'Maeneo ya jamii',
    adminTitle: 'Dashibodi ya msimamizi',
    adminSubtitle: 'Fuata ushiriki, ukuaji na afya ya mfumo papo hapo.',
    activeUsers: 'Watumiaji hai (siku 30)',
    retention: 'Ushiriki unaodumu',
    introsCompleted: 'Utambulisho wa AI uliokamilika',
    lowBandwidthTitle: 'Huduma ya data ndogo',
    lowBandwidthSubtitle: 'Fikia wanachama bila intaneti kupitia USSD au SMS.',
    ussdSteps: 'Piga *384*45# au tuma "CONNECT" kwa 21212 kupata maagizo ya SMS.',
    feedbackTitle: 'Mzunguko wa maoni',
    feedbackEmpty: 'Bado hakuna mwingiliano. Shiriki ili kuifundisha AI.',
    languageLabel: 'Lugha',
    nextMatches: 'Mapendekezo yajayo',
    analyticsOverview: 'Muhtasari wa uchambuzi',
    chatThreads: 'Ushauri wa ana kwa ana',
    send: 'Tuma',
    profileUpdated: 'Wasifu umehifadhiwa! Mapendekezo mapya yapo hapa.'
  }
};

const sampleConnections: Connection[] = [
  {
    id: '1',
    name: 'Amina Okafor',
    role: 'Product Manager',
    organisation: 'Lagos Innovate',
    location: 'Lagos, Nigeria',
    skills: ['product strategy', 'design thinking', 'mentorship'],
    interests: ['fintech', 'edtech', 'mentoring'],
    languages: ['en', 'fr'],
    summary: 'Building inclusive digital products for African youth startups.'
  },
  {
    id: '2',
    name: 'Kwame Mensah',
    role: 'AI Research Fellow',
    organisation: 'Accra Deep Learning Lab',
    location: 'Accra, Ghana',
    skills: ['machine learning', 'python', 'data storytelling'],
    interests: ['agritech', 'policy', 'open research'],
    languages: ['en'],
    summary: 'Researching computer vision solutions for agriculture and climate resilience.'
  },
  {
    id: '3',
    name: 'Nadia Ben Youssef',
    role: 'VC Analyst',
    organisation: 'Atlas Ventures',
    location: 'Tunis, Tunisia',
    skills: ['venture capital', 'financial modeling', 'market mapping'],
    interests: ['climate tech', 'women in tech', 'founder support'],
    languages: ['fr', 'en'],
    summary: 'Backing North African founders building scalable green technology.'
  },
  {
    id: '4',
    name: 'Joseph Mwangi',
    role: 'Community Builder',
    organisation: 'Nairobi Creators Hub',
    location: 'Nairobi, Kenya',
    skills: ['community building', 'events', 'storytelling'],
    interests: ['creatives', 'startups', 'impact'],
    languages: ['en', 'sw'],
    summary: 'Connecting creators and entrepreneurs through hybrid accelerator programmes.'
  },
  {
    id: '5',
    name: 'Zuri Kilonzo',
    role: 'Edtech Founder',
    organisation: 'Swahili Scholars',
    location: 'Mombasa, Kenya',
    skills: ['curriculum design', 'mobile learning', 'operations'],
    interests: ['education', 'language access', 'rural inclusion'],
    languages: ['en', 'sw'],
    summary: 'Designing mobile-first learning experiences for coastal communities.'
  },
  {
    id: '6',
    name: 'Samuel Diallo',
    role: 'Impact Investor',
    organisation: 'Sahel Capital',
    location: 'Dakar, Senegal',
    skills: ['impact investing', 'agriculture', 'capital raising'],
    interests: ['agritech', 'renewables', 'youth empowerment'],
    languages: ['fr'],
    summary: 'Investing in resilient agribusiness ventures across West Africa.'
  }
];

type AnalyticsSnapshot = {
  activeUsers: number;
  retention: number;
  introsCompleted: number;
};

const initialProfile: Profile = {
  name: 'Tariro Moyo',
  email: 'tariro@example.com',
  phone: '+263700000000',
  skills: 'Product design, user research, storytelling',
  interests: 'Climate tech, fintech, youth mentorship',
  goals: 'Meet co-founders and investors for climate venture',
  preferredIndustries: 'Climate, Fintech, Education'
};

const initialChatThreads = [
  {
    id: 'thread-1',
    partner: 'Amina Okafor',
    context: 'Product mentorship',
    messages: [
      { sender: 'Amina', content: 'Hi Tariro! How is your beta test going?', time: '09:15' },
      { sender: 'You', content: 'We onboarded 20 farmers this week. Need insights on retention.', time: '09:18' }
    ]
  },
  {
    id: 'thread-2',
    partner: 'Kwame Mensah',
    context: 'AI for agriculture',
    messages: [
      { sender: 'Kwame', content: 'Sharing our soil health dataset shortly.', time: '08:00' }
    ]
  }
];

const communitySpaces = [
  {
    id: 'group-1',
    name: 'Francophone Climate Founders',
    members: 312,
    updates: 'Weekly pitch practice and investor AMA.'
  },
  {
    id: 'group-2',
    name: 'Swahili Innovation Circle',
    members: 427,
    updates: 'Hybrid meetups plus USSD design tutorials.'
  }
];

function generateRecommendations(profile: Profile, feedback: FeedbackEntry[]): Connection[] {
  const interactedIds = new Set(feedback.map((item) => item.userId));

  const userSkillTokens = profile.skills.toLowerCase().split(/[,\n]/).map((s) => s.trim());
  const userInterestTokens = profile.interests.toLowerCase().split(/[,\n]/).map((s) => s.trim());
  const userGoalTokens = profile.goals.toLowerCase().split(/[,\n]/).map((s) => s.trim());
  const userIndustryTokens = profile.preferredIndustries.toLowerCase().split(/[,\n]/).map((s) => s.trim());

  const preferencesFromFeedback = new Map<string, number>();
  feedback.forEach((item) => {
    const weight = item.action === 'accept' ? 2 : item.action === 'skip' ? 0.5 : -1.5;
    const match = sampleConnections.find((connection) => connection.id === item.userId);
    if (match) {
      match.skills.forEach((skill) => {
        preferencesFromFeedback.set(skill, (preferencesFromFeedback.get(skill) ?? 0) + weight);
      });
      match.interests.forEach((interest) => {
        preferencesFromFeedback.set(interest, (preferencesFromFeedback.get(interest) ?? 0) + weight);
      });
    }
  });

  return sampleConnections
    .filter((connection) => !interactedIds.has(connection.id))
    .sort((a, b) => {
      const score = (connection: Connection) => {
        const skillScore = connection.skills.reduce((acc, skill) => {
          const lowerSkill = skill.toLowerCase();
          const match = userSkillTokens.some((token) => lowerSkill.includes(token));
          const feedbackWeight = preferencesFromFeedback.get(skill) ?? 0;
          return acc + (match ? 3 : 0) + feedbackWeight;
        }, 0);

        const interestScore = connection.interests.reduce((acc, interest) => {
          const lowerInterest = interest.toLowerCase();
          const match = userInterestTokens.some((token) => lowerInterest.includes(token));
          const goalBoost = userGoalTokens.some((token) => lowerInterest.includes(token)) ? 1.5 : 0;
          const feedbackWeight = preferencesFromFeedback.get(interest) ?? 0;
          return acc + (match ? 2 : 0) + goalBoost + feedbackWeight;
        }, 0);

        const industryBonus = userIndustryTokens.some((token) => connection.summary.toLowerCase().includes(token))
          ? 1.2
          : 0;

        return skillScore + interestScore + industryBonus;
      };
      return score(b) - score(a);
    })
    .map((connection) => ({ ...connection, summary: connection.summary }))
    .slice(0, 4);
}

function App(): JSX.Element {
  const [language, setLanguage] = useState<Language>('en');
  const t = useMemo(() => translations[language], [language]);
  const [profile, setProfile] = useState<Profile>(initialProfile);
  const [feedback, setFeedback] = useState<FeedbackEntry[]>([]);
  const [activeTab, setActiveTab] = useState<'onboarding' | 'matchmaking' | 'chat' | 'admin'>('onboarding');
  const [threads, setThreads] = useState(initialChatThreads);
  const [chatDraft, setChatDraft] = useState('');

  const recommendations = useMemo(() => generateRecommendations(profile, feedback), [profile, feedback]);

  const analytics: AnalyticsSnapshot = useMemo(() => {
    const accepted = feedback.filter((entry) => entry.action === 'accept').length;
    return {
      activeUsers: 18452,
      retention: 72,
      introsCompleted: 458 + accepted * 3
    };
  }, [feedback]);

  const handleProfileChange = (field: keyof Profile, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handleAction = (userId: string, action: FeedbackEntry['action']) => {
    setFeedback((prev) => {
      const existing = prev.find((entry) => entry.userId === userId);
      const timestamp = new Date().toISOString();
      if (existing) {
        return prev.map((entry) =>
          entry.userId === userId
            ? {
                ...entry,
                action,
                timestamp
              }
            : entry
        );
      }
      return [...prev, { userId, action, timestamp }];
    });
  };

  const activeThreads = useMemo(() => threads, [threads]);

  const handleSendMessage = (threadId: string) => {
    if (!chatDraft.trim()) {
      return;
    }
    setThreads((prev) =>
      prev.map((thread) =>
        thread.id === threadId
          ? {
              ...thread,
              messages: [
                ...thread.messages,
                {
                  sender: 'You',
                  content: chatDraft,
                  time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }
              ]
            }
          : thread
      )
    );
    setChatDraft('');
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <h1>{t.appTitle}</h1>
          <p>{t.onboardingSubtitle}</p>
        </div>
        <div className="header-controls">
          <label className="language-select">
            {t.languageLabel}
            <select value={language} onChange={(event) => setLanguage(event.target.value as Language)}>
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="sw">Kiswahili</option>
            </select>
          </label>
          <nav className="navigation">
            <button onClick={() => setActiveTab('onboarding')} className={activeTab === 'onboarding' ? 'active' : ''}>
              {t.onboardingTitle}
            </button>
            <button onClick={() => setActiveTab('matchmaking')} className={activeTab === 'matchmaking' ? 'active' : ''}>
              {t.matchmakingTitle}
            </button>
            <button onClick={() => setActiveTab('chat')} className={activeTab === 'chat' ? 'active' : ''}>
              {t.chatTitle}
            </button>
            <button onClick={() => setActiveTab('admin')} className={activeTab === 'admin' ? 'active' : ''}>
              {t.adminTitle}
            </button>
          </nav>
        </div>
      </header>

      <main className="content">
        {activeTab === 'onboarding' && (
          <section className="card onboarding-card">
            <div className="section-header">
              <h2>{t.onboardingTitle}</h2>
              <span className="tag">Mobile-first</span>
            </div>
            <p>{t.onboardingSubtitle}</p>
            <div className="form-grid">
              <label>
                {t.nameLabel}
                <input value={profile.name} onChange={(event) => handleProfileChange('name', event.target.value)} />
              </label>
              <label>
                {t.emailLabel}
                <input value={profile.email} onChange={(event) => handleProfileChange('email', event.target.value)} />
              </label>
              <label>
                {t.phoneLabel}
                <input value={profile.phone} onChange={(event) => handleProfileChange('phone', event.target.value)} />
              </label>
              <label className="wide">
                {t.skillsLabel}
                <textarea value={profile.skills} onChange={(event) => handleProfileChange('skills', event.target.value)} />
              </label>
              <label className="wide">
                {t.interestsLabel}
                <textarea value={profile.interests} onChange={(event) => handleProfileChange('interests', event.target.value)} />
              </label>
              <label className="wide">
                {t.goalsLabel}
                <textarea value={profile.goals} onChange={(event) => handleProfileChange('goals', event.target.value)} />
              </label>
              <label className="wide">
                {t.industriesLabel}
                <textarea
                  value={profile.preferredIndustries}
                  onChange={(event) => handleProfileChange('preferredIndustries', event.target.value)}
                />
              </label>
            </div>
            <div className="actions-inline">
              <span className="status-pill success">{t.profileUpdated}</span>
              <button className="primary">{t.updateProfile}</button>
            </div>
            <div className="low-bandwidth">
              <h3>{t.lowBandwidthTitle}</h3>
              <p>{t.lowBandwidthSubtitle}</p>
              <div className="ussd-card">{t.ussdSteps}</div>
            </div>
          </section>
        )}

        {activeTab === 'matchmaking' && (
          <section className="grid">
            <div className="card">
              <div className="section-header">
                <h2>{t.matchmakingTitle}</h2>
                <span className="tag">AI Graph</span>
              </div>
              <p>{t.matchmakingSubtitle}</p>
              <div className="recommendations">
                {recommendations.map((connection) => (
                  <article key={connection.id} className="recommendation-card">
                    <div className="avatar" aria-hidden>
                      {connection.name
                        .split(' ')
                        .map((part) => part[0])
                        .join('')
                        .slice(0, 2)}
                    </div>
                    <div className="profile-detail">
                      <h3>{connection.name}</h3>
                      <p className="role">
                        {connection.role} · {connection.organisation}
                      </p>
                      <p className="meta">{connection.location}</p>
                      <p className="summary">{connection.summary}</p>
                      <div className="chips">
                        {connection.skills.slice(0, 3).map((skill) => (
                          <span key={skill} className="chip">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="actions">
                      <button className="primary" onClick={() => handleAction(connection.id, 'accept')}>
                        {t.accept}
                      </button>
                      <button className="ghost" onClick={() => handleAction(connection.id, 'skip')}>
                        {t.skip}
                      </button>
                      <button className="outline" onClick={() => handleAction(connection.id, 'decline')}>
                        {t.decline}
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="card">
              <div className="section-header">
                <h3>{t.nextMatches}</h3>
                <span className="tag gold">{t.actionsHeading}</span>
              </div>
              <ul className="feedback-list">
                {feedback.length === 0 && <li className="empty-state">{t.feedbackEmpty}</li>}
                {feedback.map((entry) => {
                  const match = sampleConnections.find((item) => item.id === entry.userId);
                  if (!match) return null;
                  return (
                    <li key={entry.userId} className={`feedback-item ${entry.action}`}>
                      <span className="name">{match.name}</span>
                      <span className="action">{t[entry.action]}</span>
                      <time>{new Date(entry.timestamp).toLocaleTimeString()}</time>
                    </li>
                  );
                })}
              </ul>
            </aside>
          </section>
        )}

        {activeTab === 'chat' && (
          <section className="grid chat-grid">
            <div className="card">
              <div className="section-header">
                <h2>{t.chatTitle}</h2>
                <span className="tag">Realtime</span>
              </div>
              <p>{t.chatSubtitle}</p>
              <div className="chat-threads">
                {activeThreads.map((thread) => (
                  <div key={thread.id} className="chat-thread">
                    <header>
                      <h3>
                        {thread.partner} · <span>{thread.context}</span>
                      </h3>
                    </header>
                    <div className="chat-messages">
                      {thread.messages.map((message, index) => (
                        <div key={index} className={`message ${message.sender === 'You' ? 'sent' : 'received'}`}>
                          <span className="sender">{message.sender}</span>
                          <p>{message.content}</p>
                          <time>{message.time}</time>
                        </div>
                      ))}
                    </div>
                    <div className="chat-input">
                      <input
                        value={chatDraft}
                        placeholder={t.chatInputPlaceholder}
                        onChange={(event) => setChatDraft(event.target.value)}
                      />
                      <button onClick={() => handleSendMessage(thread.id)} className="primary">
                        {t.send}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <aside className="card">
              <div className="section-header">
                <h3>{t.groupsTitle}</h3>
                <span className="tag gold">USSD / SMS</span>
              </div>
              <ul className="groups">
                {communitySpaces.map((group) => (
                  <li key={group.id}>
                    <h4>{group.name}</h4>
                    <p>{group.updates}</p>
                    <span className="meta">{group.members} members</span>
                  </li>
                ))}
              </ul>
            </aside>
          </section>
        )}

        {activeTab === 'admin' && (
          <section className="grid">
            <div className="card">
              <div className="section-header">
                <h2>{t.adminTitle}</h2>
                <span className="tag">AI Insights</span>
              </div>
              <p>{t.adminSubtitle}</p>
              <div className="analytics-grid">
                <div className="analytics-card">
                  <span className="label">{t.activeUsers}</span>
                  <strong>{analytics.activeUsers.toLocaleString()}</strong>
                </div>
                <div className="analytics-card">
                  <span className="label">{t.retention}</span>
                  <strong>{analytics.retention}%</strong>
                </div>
                <div className="analytics-card">
                  <span className="label">{t.introsCompleted}</span>
                  <strong>{analytics.introsCompleted}</strong>
                </div>
              </div>
              <div className="feedback-loop">
                <h3>{t.feedbackTitle}</h3>
                <p>
                  {feedback.length > 0
                    ? `${feedback.filter((item) => item.action === 'accept').length} positive signals and ${feedback.filter((item) => item.action === 'decline').length} negative signals captured.`
                    : t.feedbackEmpty}
                </p>
                <div className="feedback-table">
                  <div className="feedback-row header">
                    <span>Connection</span>
                    <span>Action</span>
                    <span>Last update</span>
                  </div>
                  {feedback.map((entry) => {
                    const match = sampleConnections.find((item) => item.id === entry.userId);
                    if (!match) return null;
                    return (
                      <div key={entry.userId} className={`feedback-row ${entry.action}`}>
                        <span>{match.name}</span>
                        <span>{t[entry.action]}</span>
                        <span>{new Date(entry.timestamp).toLocaleTimeString()}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <aside className="card">
              <div className="section-header">
                <h3>{t.analyticsOverview}</h3>
                <span className="tag gold">Ops</span>
              </div>
              <ul className="admin-list">
                <li>
                  <strong>AI health:</strong> Graph freshness updated 12m ago, drift stable.
                </li>
                <li>
                  <strong>USSD traffic:</strong> 3,482 daily prompts, 42% completion rate.
                </li>
                <li>
                  <strong>Top skills:</strong> Product, Data, Climate tech.
                </li>
                <li>
                  <strong>Groups:</strong> Swahili Innovation Circle trending +18% growth.
                </li>
              </ul>
            </aside>
          </section>
        )}
      </main>

      <footer className="app-footer">
        <span>© {new Date().getFullYear()} Amisag. Designed for Africa-first collaboration.</span>
      </footer>
    </div>
  );
}

export default App;
