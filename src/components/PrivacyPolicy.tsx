import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const PrivacyPolicy = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with back button */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-orange hover:text-white transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={20} />
          <span className="font-['Gilroy-Medium']">Back to Home</span>
        </button>
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 lg:p-12">
          <h1 className="font-['Denton-Bold'] text-3xl lg:text-4xl text-orange mb-2">
            Privacy Policy
          </h1>
          
          <p className="font-['Gilroy-Regular'] text-gray-400 mb-8">
            Last updated on 31-05-2025 12:12:45
          </p>

          <div className="space-y-8 font-['Gilroy-Regular'] text-gray-300 leading-relaxed">
            
            {/* Introduction */}
            <section>
              <p className="text-lg mb-4">
                At MANDIN STUDIOS LLP, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                or use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="font-['Denton-Bold'] text-xl text-orange mb-4">Information We Collect</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p><strong>Personal Information:</strong> Name, email address, phone number, company details, and billing information when you contact us or use our services.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p><strong>Technical Information:</strong> IP address, browser type, device information, and usage data through cookies and similar technologies.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p><strong>Project Information:</strong> Details about your project requirements, specifications, and related communications.</p>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="font-['Denton-Bold'] text-xl text-orange mb-4">How We Use Your Information</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p>Provide, maintain, and improve our services</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p>Communicate with you about projects, updates, and support</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p>Process payments and manage billing</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p>Analyze website usage to enhance user experience</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p>Comply with legal obligations and protect our rights</p>
                </div>
              </div>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="font-['Denton-Bold'] text-xl text-orange mb-4">Information Sharing and Disclosure</h2>
              <p className="mb-4">We do not sell, trade, or rent your personal information. We may share your information only in the following circumstances:</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p><strong>Service Providers:</strong> Trusted third parties who assist in providing our services</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</p>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="font-['Denton-Bold'] text-xl text-orange mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. These include encryption, secure servers, 
                access controls, and regular security assessments.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="font-['Denton-Bold'] text-xl text-orange mb-4">Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to provide our services, comply with legal 
                obligations, resolve disputes, and enforce our agreements. When no longer needed, we securely delete or 
                anonymize your data.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="font-['Denton-Bold'] text-xl text-orange mb-4">Your Rights</h2>
              <p className="mb-4">You have the following rights regarding your personal information:</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p><strong>Access:</strong> Request access to your personal information</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p><strong>Correction:</strong> Request correction of inaccurate information</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p><strong>Deletion:</strong> Request deletion of your personal information</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p><strong>Portability:</strong> Request transfer of your data to another service</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p><strong>Objection:</strong> Object to processing of your personal information</p>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="font-['Denton-Bold'] text-xl text-orange mb-4">Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, 
                and personalize content. You can control cookie settings through your browser preferences, though 
                some features may not function properly if cookies are disabled.
              </p>
            </section>

            {/* Third-Party Links */}
            <section>
              <h2 className="font-['Denton-Bold'] text-xl text-orange mb-4">Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices 
                or content of these external sites. We encourage you to review their privacy policies before providing 
                any personal information.
              </p>
            </section>

            {/* Updates */}
            <section>
              <h2 className="font-['Denton-Bold'] text-xl text-orange mb-4">Policy Updates</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by 
                posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use 
                of our services after any changes constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Contact Information */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <h3 className="font-['Denton-Bold'] text-xl text-orange mb-4">Contact Us</h3>
              <p className="text-gray-400 mb-3">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="space-y-1">
                <p><span className="text-orange">Email:</span> privacy@mandinstudios.com</p>
                <p><span className="text-orange">Phone:</span> +1 (234) 567-890</p>
                <p><span className="text-orange">Address:</span> Hyderabad, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy 