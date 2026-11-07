import { site } from "./site";

export type LegalBlock =
    | { type: "p"; text: string }
    | { type: "list"; items: string[] }
    | { type: "table"; head: [string, string]; rows: [string, string][] };

export type LegalSection = {
    id: string;
    title: string;
    blocks: LegalBlock[];
};

export type LegalDoc = {
    eyebrow: string;
    title: string;
    accent: string;
    intro: string;
    sections: LegalSection[];
};

export const privacyPolicy: LegalDoc = {
    eyebrow: "Privacy Policy",
    title: "Your Data,",
    accent: "Your Control",
    intro: `This Privacy Policy explains how ${site.company} ("we", "us") collects, uses, and protects information when you use the ${site.appName} mobile app and website (the "Service"). We collect only what we need to coach you, verify your activity, and keep the Service running.`,
    sections: [
        {
            id: "information-we-collect",
            title: "Information We Collect",
            blocks: [
                { type: "p", text: "We collect information you give us, information created when you use the Service, and information from device features you choose to enable." },
                {
                    type: "table",
                    head: ["Category", "What it includes"],
                    rows: [
                        ["Account", "Email address, display name, profile photo, and a device identifier used to secure your login."],
                        ["Profile and goals", "Age, gender, height, weight, fitness level, goals, dietary preferences, and onboarding answers."],
                        ["Fitness and activity", "Workouts, sets, reps, steps, distance, pace, calories, streaks, and achievements."],
                        ["Health data", "With your permission, data from Apple Health such as steps, workouts, heart rate, and sleep."],
                        ["Location", "Precise location while you track an outdoor activity or search for nearby gyms and studios."],
                        ["Camera and media", "Camera frames for rep counting and form checks, and photos or videos you choose to post."],
                        ["Nutrition", "Meals, food photos, and logs you add to the nutrition tracker."],
                        ["Messages and community", "Posts, comments, chat messages, and messages you send to the AI coach."],
                        ["Technical", "App version, device model, operating system, crash logs, and basic usage analytics."],
                    ],
                },
            ],
        },
        {
            id: "how-we-use",
            title: "How We Use Information",
            blocks: [
                {
                    type: "list",
                    items: [
                        "Create and secure your account, including one time passcode login.",
                        "Generate personalised workout, nutrition, and training plans.",
                        "Power the AI coach and remember your progress across sessions.",
                        "Verify real activity for streaks, leaderboards, and rewards.",
                        "Show nearby gyms, coaches, studios, and community features.",
                        "Send service messages such as login codes and important account notices.",
                        "Detect fraud and abuse, fix bugs, and improve the Service.",
                    ],
                },
                { type: "p", text: "We do not sell your personal information. We do not use your health data for advertising, and we do not share Apple Health data with third parties for marketing." },
            ],
        },
        {
            id: "camera-on-device",
            title: "Camera and On Device Processing",
            blocks: [
                { type: "p", text: "Rep counting and pose detection run on your device. Camera frames are processed in real time and are not stored on our servers unless you explicitly save or share a recording. When you request an AI form check, the selected frames are sent to our AI provider only to produce that result." },
            ],
        },
        {
            id: "health-data",
            title: "Apple Health",
            blocks: [
                { type: "p", text: "If you connect Apple Health, we read only the data types you approve in the permission screen. You can revoke access at any time in the iOS Settings app under Health. Data read from Apple Health is used solely to provide fitness features inside the Service and is never sold or used for advertising." },
            ],
        },
        {
            id: "sharing",
            title: "How We Share Information",
            blocks: [
                { type: "p", text: "We share information only with service providers who help us run the Service, under contracts that limit their use of the data:" },
                {
                    type: "table",
                    head: ["Provider", "Purpose"],
                    rows: [
                        ["Supabase", "Database and file storage."],
                        ["Render", "Hosting for our application servers."],
                        ["Google Gemini API", "AI coaching, meal analysis, and plan generation."],
                        ["Google (Gmail)", "Delivery of login codes and account emails."],
                        ["Map tile providers", "Displaying maps for activity tracking and nearby places."],
                    ],
                },
                { type: "p", text: "Content you post to the community is visible to other users. We may also disclose information if required by law, to protect the safety of users, or as part of a merger or acquisition, in which case this policy will continue to apply." },
            ],
        },
        {
            id: "retention",
            title: "Data Retention",
            blocks: [
                { type: "p", text: "We keep your information while your account is active. When you delete your account, we delete or anonymise your personal data within 30 days, except where we must keep limited records to meet legal obligations, resolve disputes, or prevent fraud." },
            ],
        },
        {
            id: "your-rights",
            title: "Your Rights and Choices",
            blocks: [
                {
                    type: "list",
                    items: [
                        "Access and update your profile in the app at any time.",
                        "Delete your account in the app from Profile, Settings, Delete Account, or by contacting us.",
                        "Withdraw permissions for location, camera, notifications, and Apple Health in your device settings.",
                        `Request a copy of your data or ask us to correct it by emailing ${site.privacyEmail}.`,
                    ],
                },
                { type: "p", text: "Depending on where you live, you may have additional rights under laws such as India's Digital Personal Data Protection Act 2023, the GDPR, or the CCPA. We honour these requests regardless of your location." },
            ],
        },
        {
            id: "security",
            title: "Security",
            blocks: [
                { type: "p", text: "Data is encrypted in transit using TLS. Login codes are hashed and expire after 15 minutes, sessions are bound to your device, and access to production systems is restricted. No system is perfectly secure, so we encourage you to keep your device protected with a passcode." },
            ],
        },
        {
            id: "children",
            title: "Children",
            blocks: [
                { type: "p", text: `The Service is not directed to children under 13, and we do not knowingly collect their personal data. If you believe a child has provided us data, contact ${site.privacyEmail} and we will delete it.` },
            ],
        },
        {
            id: "transfers",
            title: "International Transfers",
            blocks: [
                { type: "p", text: "Our servers and providers may be located in India, Singapore, the United States, and other countries. When data moves across borders we apply the safeguards described in this policy." },
            ],
        },
        {
            id: "changes",
            title: "Changes to This Policy",
            blocks: [
                { type: "p", text: "We may update this policy from time to time. We will post the new version on this page and update the effective date, and we will notify you in the app for material changes." },
            ],
        },
        {
            id: "contact",
            title: "Contact",
            blocks: [
                { type: "p", text: `Questions about privacy can be sent to ${site.privacyEmail}. General support is available at ${site.supportEmail}. ${site.company}, ${site.country}.` },
            ],
        },
    ],
};

export const termsOfUse: LegalDoc = {
    eyebrow: "Terms of Use",
    title: "The Rules of",
    accent: "the Game",
    intro: `These Terms govern your use of the ${site.appName} app and website provided by ${site.company}. By creating an account or using the Service you agree to these Terms.`,
    sections: [
        {
            id: "eligibility",
            title: "Eligibility",
            blocks: [
                { type: "p", text: "You must be at least 13 years old to use the Service. If you are under the age of majority where you live, you may use the Service only with the consent of a parent or guardian." },
            ],
        },
        {
            id: "account",
            title: "Your Account",
            blocks: [
                { type: "p", text: "You sign in with a one time passcode sent to your email. Each account is linked to one device for security. You are responsible for activity on your account and must keep access to your email secure." },
            ],
        },
        {
            id: "health-disclaimer",
            title: "Health Disclaimer",
            blocks: [
                { type: "p", text: "The Service provides general fitness and nutrition information and AI generated suggestions. It is not medical advice and does not replace a doctor, dietitian, or qualified trainer. Consult a healthcare professional before starting a new exercise or diet programme, and stop exercising immediately if you feel pain, dizziness, or shortness of breath." },
            ],
        },
        {
            id: "acceptable-use",
            title: "Acceptable Use",
            blocks: [
                {
                    type: "list",
                    items: [
                        "Do not falsify activity, spoof GPS, or manipulate leaderboards and rewards.",
                        "Do not post content that is unlawful, hateful, harassing, sexual, or infringes the rights of others.",
                        "Do not attempt to access other accounts, reverse engineer, or disrupt the Service.",
                        "Do not use the Service to send spam or unsolicited promotions.",
                    ],
                },
                { type: "p", text: "We may remove content and suspend or close accounts that break these rules. You can report users or content from within the app or by contacting support." },
            ],
        },
        {
            id: "content",
            title: "Your Content",
            blocks: [
                { type: "p", text: "You own the content you post. You grant us a limited licence to host, display, and process it in order to operate the Service. You can delete your content at any time." },
            ],
        },
        {
            id: "rewards",
            title: "Rewards and Tokens",
            blocks: [
                { type: "p", text: "Rewards, tokens, and points have no cash value unless explicitly stated in the app, cannot be transferred outside the Service, and may be adjusted or revoked if earned through fraud or error. Reward programmes may change or end with notice." },
            ],
        },
        {
            id: "availability",
            title: "Availability and Changes",
            blocks: [
                { type: "p", text: "The Service is currently free to use. We may add, change, or remove features, and the Service may occasionally be unavailable for maintenance. If paid features are introduced, pricing will be shown clearly before purchase." },
            ],
        },
        {
            id: "liability",
            title: "Limitation of Liability",
            blocks: [
                { type: "p", text: "The Service is provided as is. To the extent permitted by law, we are not liable for indirect or consequential damages, or for injuries arising from exercise or dietary choices made using the Service." },
            ],
        },
        {
            id: "termination",
            title: "Termination",
            blocks: [
                { type: "p", text: "You may stop using the Service and delete your account at any time. We may suspend or terminate access if you violate these Terms." },
            ],
        },
        {
            id: "law",
            title: "Governing Law",
            blocks: [
                { type: "p", text: "These Terms are governed by the laws of India, with courts in Bengaluru, Karnataka having jurisdiction, subject to any mandatory consumer protections where you live." },
            ],
        },
        {
            id: "contact",
            title: "Contact",
            blocks: [
                { type: "p", text: `Questions about these Terms can be sent to ${site.supportEmail}.` },
            ],
        },
    ],
};