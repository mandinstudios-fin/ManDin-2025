import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const RefundPolicy = () => {
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
            Cancellation & Refund Policy
          </h1>
          
          <p className="font-['Gilroy-Regular'] text-gray-400 mb-8">
            Last updated on 31-05-2025 12:12:45
          </p>

          <div className="space-y-6 font-['Gilroy-Regular'] text-gray-300 leading-relaxed">
            <p className="text-lg">
              MANDIN STUDIOS LLP believes in helping its customers as far as possible, and has therefore a liberal
              cancellation policy. Under this policy:
            </p>

            <div className="space-y-4">
              <div className="flex flex-col space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p>
                    Cancellations will be considered only if the request is made immediately after placing the order.
                    However, the cancellation request may not be entertained if the orders have been communicated to the
                    vendors/merchants and they have initiated the process of shipping them.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p>
                    MANDIN STUDIOS LLP does not accept cancellation requests for perishable items like flowers,
                    eatables etc. However, refund/replacement can be made if the customer establishes that the quality of
                    product delivered is not good.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p>
                    In case of receipt of damaged or defective items please report the same to our Customer Service team.
                    The request will, however, be entertained once the merchant has checked and determined the same at his
                    own end. This should be reported within <span className="text-orange font-semibold">7 Days</span> of receipt of the products. In case you feel that the
                    product received is not as shown on the site or as per your expectations, you must bring it to the notice of
                    our customer service within <span className="text-orange font-semibold">7 Days</span> of receiving the product. The Customer Service Team after
                    looking into your complaint will take an appropriate decision.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-orange font-bold mt-1">•</span>
                  <p>
                    In case of complaints regarding products that come with a warranty from manufacturers, please refer
                    the issue to them. In case of any Refunds approved by the MANDIN STUDIOS LLP, it'll take <span className="text-orange font-semibold">3-5 Days</span> for the refund to be processed to the end customer.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <h3 className="font-['Denton-Bold'] text-xl text-orange mb-4">Contact Us</h3>
              <p className="text-gray-400">
                If you have any questions about this Refund Policy, please contact us at:
              </p>
              <div className="mt-3 space-y-1">
                <p><span className="text-orange">Email:</span> info@mandinstudios.com</p>
                <p><span className="text-orange">Phone:</span> +91-9115962222</p>
                <p><span className="text-orange">Address:</span> Hyderabad, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RefundPolicy
