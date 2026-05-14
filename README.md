# 🏥 VeriMed Auth

> **Tamper-proof medical result verification on Solana blockchain**

A hackathon MVP that solves fake medical report fraud using blockchain anchoring, AI explanations, and ElevenLabs voice accessibility.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# 1. Clone / unzip the project
cd verimed-auth

# 2. Install dependencies
npm install

# 3. Set up environment (optional - app works without API keys)
cp .env.example .env.local
# Edit .env.local and add your ElevenLabs API key

# 4. Run development server
npm run dev

# 5. Open in browser
# http://localhost:3000
```

---

## 🔑 Environment Variables

```env
# Optional: ElevenLabs API key for premium AI voice
# Without it, the app falls back to browser TTS (still works!)
ELEVENLABS_API_KEY=your_key_here
ELEVENLABS_VOICE_ID=21m00Tcm4TlvDq8ikWAM   # Rachel (default)

# Solana network (devnet for hackathon)
NEXT_PUBLIC_SOLANA_NETWORK=devnet
```

Get your ElevenLabs API key at: https://elevenlabs.io

---

## 📱 App Pages

| Page | Route | Description |
|------|-------|-------------|
| Landing | `/` | Hero, features, demo flow |
| Upload | `/upload` | Upload report, generate hash, store on Solana, AI + voice |
| Verify | `/verify` | Upload document, detect tampering |
| Dashboard | `/dashboard` | Mock analytics, recent records |

---

## 🎮 Demo Flow

### ✅ Authentic Document Test
1. Go to `/upload`
2. Upload any PDF or image
3. Copy the SHA-256 hash shown
4. Go to `/verify`
5. Paste the hash in the input field
6. Upload the **same file** again
7. → **✅ AUTHENTIC** result

### ❌ Tampered Document Test
1. Go to `/upload`
2. Upload a file, copy the hash
3. Go to `/verify`
4. Paste the hash
5. Upload a **different file**
6. → **❌ TAMPERED** result

---

## 🏗️ Architecture

```
verimed-auth/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Landing page
│   │   ├── upload/page.tsx       # Upload + blockchain + AI
│   │   ├── verify/page.tsx       # Tamper detection
│   │   ├── dashboard/page.tsx    # Analytics dashboard
│   │   └── api/
│   │       ├── voice/route.ts    # ElevenLabs API proxy
│   │       └── solana/route.ts   # Blockchain storage
│   ├── components/
│   │   ├── Navigation.tsx        # Top nav
│   │   ├── HashDisplay.tsx       # SHA-256 display
│   │   ├── WalletCard.tsx        # Solana wallet info
│   │   ├── QRDisplay.tsx         # QR code generator
│   │   ├── VoicePlayer.tsx       # ElevenLabs + TTS player
│   │   └── VerificationResult.tsx # Authentic/Tampered UI
│   └── lib/
│       ├── hash.ts               # SHA-256 utilities
│       ├── solana.ts             # Solana Web3.js helpers
│       ├── ai-summarizer.ts      # AI lab result explainer
│       ├── elevenlabs.ts         # Voice synthesis
│       └── qr-generator.ts      # QR code generation
```

---

## 🔧 Tech Stack

- **Next.js 15** – App Router, API Routes
- **TypeScript** – Full type safety
- **Tailwind CSS** – Utility-first styling
- **@solana/web3.js** – Blockchain integration
- **crypto-js** – SHA-256 hashing
- **react-dropzone** – File upload
- **qrcode** – QR generation
- **framer-motion** – Animations
- **lucide-react** – Icons
- **ElevenLabs API** – Voice synthesis

---

## 🌟 Key Features

1. **SHA-256 Fingerprinting** – Cryptographic document fingerprint
2. **Solana Anchoring** – Hash stored in transaction memo on devnet
3. **Auto Wallet Generation** – Patient blockchain identity via `Keypair.generate()`
4. **Tamper Detection** – Hash mismatch instantly reveals modifications
5. **AI Explanation** – Medical jargon → plain language
6. **Voice Accessibility** – ElevenLabs reads results aloud (browser TTS fallback)
7. **QR Verification** – Scannable QR code for instant verification
8. **Explorer Links** – All transactions verifiable on Solana Explorer

---

## 🏆 Hackathon Notes

- Uses Solana **devnet** (free, no real SOL needed)
- Airdrop funded automatically for transactions
- ElevenLabs falls back to Web Speech API gracefully
- All mock data clearly labeled in dashboard
- Full demo loop runs in < 60 seconds

---

Built with ❤️ for healthcare accessibility and blockchain transparency.
