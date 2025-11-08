import { useState } from 'react';
import DesktopModal from '../imports/Modal-48-8208';
import MobileModal from '../imports/Modal-48-8908';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Reset form and close modal
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      description: ''
    });
    setIsSubmitting(false);
    onClose();
  };

  const isFormValid = formData.firstName && formData.lastName && formData.email && formData.phone;

  return (
    <div className="fixed inset-0 z-50" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        {/* Desktop version - shown at 768px and above */}
        <div className="hidden md:block">
          <DesktopModalContent
            formData={formData}
            setFormData={setFormData}
            isSubmitting={isSubmitting}
            isFormValid={isFormValid}
            onClose={onClose}
            onSubmit={handleSubmit}
          />
        </div>
        
        {/* Mobile version - shown below 768px */}
        <div className="md:hidden">
          <MobileModalContent
            formData={formData}
            setFormData={setFormData}
            isSubmitting={isSubmitting}
            isFormValid={isFormValid}
            onClose={onClose}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

function DesktopModalContent({ formData, setFormData, isSubmitting, isFormValid, onClose, onSubmit }: any) {
  return (
    <div className="relative size-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center p-[32px] relative size-full">
          <div className="absolute backdrop-blur backdrop-filter inset-0">
            <div className="absolute bg-[rgba(21,94,239,0.2)] inset-0 opacity-70" />
          </div>
          
          <div className="bg-white box-border content-stretch flex flex-col items-center max-w-[640px] overflow-clip relative rounded-[16px] shadow-[0px_20px_24px_-4px_rgba(10,13,18,0.08),0px_8px_8px_-4px_rgba(10,13,18,0.03),0px_3px_3px_-1.5px_rgba(10,13,18,0.04)] shrink-0 w-full">
            {/* Header */}
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
              <div className="relative shrink-0 w-full">
                <div className="size-full">
                  <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
                    <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 w-full">
                      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] relative shrink-0 text-[#181d27] text-[16px] w-full">Get In Touch</p>
                      <p className="font-['Avenir:Regular',_sans-serif] leading-[20px] relative shrink-0 text-[#535862] text-[14px] w-full">Provide contact details for a callback</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute box-border content-stretch flex items-center justify-center overflow-clip p-[8px] right-[12px] rounded-[8px] size-[44px] top-[12px] cursor-pointer hover:bg-gray-100 transition-colors" onClick={onClose}>
                <div className="relative shrink-0 size-[24px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6L18 18" stroke="#A4A7AE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              
              <div className="h-[20px] shrink-0 w-full" />
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} className="w-full">
              <div className="relative shrink-0 w-full">
                <div className="size-full">
                  <div className="box-border content-stretch flex flex-col gap-[20px] items-start px-[24px] py-0 relative w-full">
                    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                      {/* First and Last Name Row */}
                      <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                        <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative self-stretch shrink-0">
                          <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                            <p className="font-['Avenir:Medium',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] text-nowrap whitespace-pre">First Name</p>
                          </div>
                          <div className="bg-white relative rounded-[234px] shrink-0 w-full">
                            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                              <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
                                <input
                                  type="text"
                                  value={formData.firstName}
                                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                  placeholder="Enter first name"
                                  className="basis-0 font-['Avenir:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic outline-none relative shrink-0 text-[#717680] text-[16px] bg-transparent"
                                />
                              </div>
                            </div>
                            <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                          </div>
                        </div>
                        
                        <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative self-stretch shrink-0">
                          <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                            <p className="font-['Avenir:Medium',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] text-nowrap whitespace-pre">Last Name</p>
                          </div>
                          <div className="bg-white relative rounded-[234px] shrink-0 w-full">
                            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                              <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
                                <input
                                  type="text"
                                  value={formData.lastName}
                                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                  placeholder="Enter last name"
                                  className="basis-0 font-['Avenir:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic outline-none relative shrink-0 text-[#717680] text-[16px] bg-transparent"
                                />
                              </div>
                            </div>
                            <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                          </div>
                        </div>
                      </div>

                      {/* Email and Phone Row */}
                      <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                        <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative self-stretch shrink-0">
                          <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                            <p className="font-['Avenir:Medium',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] text-nowrap whitespace-pre">Email</p>
                          </div>
                          <div className="bg-white relative rounded-[234px] shrink-0 w-full">
                            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                              <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
                                <input
                                  type="email"
                                  value={formData.email}
                                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                  placeholder="Enter email"
                                  className="basis-0 font-['Avenir:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic outline-none relative shrink-0 text-[#717680] text-[16px] bg-transparent"
                                />
                              </div>
                            </div>
                            <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                          </div>
                        </div>
                        
                        <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0">
                          <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                            <p className="font-['Avenir:Medium',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] text-nowrap whitespace-pre">Phone Number</p>
                          </div>
                          <div className="bg-white relative rounded-[234px] shrink-0 w-full">
                            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                              <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
                                <input
                                  type="tel"
                                  value={formData.phone}
                                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                  placeholder="Enter phone number"
                                  className="basis-0 font-['Avenir:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic outline-none relative shrink-0 text-[#717680] text-[16px] bg-transparent"
                                />
                              </div>
                            </div>
                            <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="content-stretch flex flex-col gap-[6px] h-[144px] isolate items-start relative shrink-0 w-full">
                        <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0 w-full z-[2]">
                          <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                            <p className="font-['Avenir:Medium',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] text-nowrap whitespace-pre">Description</p>
                          </div>
                          <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full">
                            <div className="overflow-clip rounded-[inherit] size-full">
                              <div className="box-border content-stretch flex gap-[8px] items-start px-[14px] py-[12px] relative size-full">
                                <textarea
                                  value={formData.description}
                                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                  placeholder="Write a brief description..."
                                  className="basis-0 font-['Avenir:Regular',_sans-serif] grow h-full leading-[24px] min-h-px min-w-px not-italic outline-none relative shrink-0 text-[#717680] text-[16px] bg-transparent resize-none"
                                />
                              </div>
                            </div>
                            <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[32px] px-0 relative shrink-0 w-full">
                <div className="relative shrink-0 w-full">
                  <div className="size-full">
                    <div className="box-border content-stretch flex gap-[12px] items-start pb-[24px] pt-0 px-[24px] relative w-full">
                      <button
                        type="submit"
                        disabled={!isFormValid || isSubmitting}
                        className={`basis-0 grow min-h-px min-w-px relative rounded-[234px] shrink-0 ${
                          isFormValid && !isSubmitting ? 'bg-[#155eef] cursor-pointer' : 'bg-transparent cursor-not-allowed'
                        }`}
                      >
                        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                          <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[10px] relative w-full">
                            <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0">
                              {isSubmitting ? (
                                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              ) : (
                                <p className={`font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre ${
                                  isFormValid ? 'text-white' : 'text-[#a4a7ae]'
                                }`}>Submit</p>
                              )}
                            </div>
                          </div>
                        </div>
                        {isFormValid && !isSubmitting && (
                          <>
                            <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
                            <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                          </>
                        )}
                        {(!isFormValid || isSubmitting) && (
                          <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileModalContent({ formData, setFormData, isSubmitting, isFormValid, onClose, onSubmit }: any) {
  return (
    <div className="relative size-full">
      <div className="flex flex-col items-center justify-end size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-end pb-[64px] pt-[16px] px-[16px] relative size-full">
          <div className="absolute backdrop-blur backdrop-filter inset-0">
            <div className="absolute bg-[rgba(21,94,239,0.2)] inset-0 opacity-70" />
          </div>
          
          <div className="bg-white box-border content-stretch flex flex-col items-center overflow-clip relative rounded-[16px] shadow-[0px_20px_24px_-4px_rgba(10,13,18,0.08),0px_8px_8px_-4px_rgba(10,13,18,0.03),0px_3px_3px_-1.5px_rgba(10,13,18,0.04)] shrink-0 w-full">
            {/* Header */}
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
              <div className="relative shrink-0 w-full">
                <div className="size-full">
                  <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[20px] px-[16px] relative w-full">
                    <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 w-full">
                      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] relative shrink-0 text-[#181d27] text-[16px] w-full">Get in Touch</p>
                      <p className="font-['Avenir:Regular',_sans-serif] leading-[20px] relative shrink-0 text-[#535862] text-[14px] w-full">Provide contact details for a callback</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute box-border content-stretch flex items-center justify-center overflow-clip p-[8px] right-[12px] rounded-[8px] size-[44px] top-[12px] cursor-pointer active:bg-gray-100 transition-colors" onClick={onClose}>
                <div className="relative shrink-0 size-[24px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6L18 18" stroke="#A4A7AE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              
              <div className="h-[20px] shrink-0 w-full" />
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} className="w-full">
              <div className="relative shrink-0 w-full">
                <div className="flex flex-col items-center size-full">
                  <div className="box-border content-stretch flex flex-col gap-[20px] items-center px-[16px] py-0 relative w-full">
                    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                      {/* First Name */}
                      <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[2px] items-start relative shrink-0">
                          <p className="font-['Avenir:Medium',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] text-nowrap whitespace-pre">First Name</p>
                        </div>
                        <div className="bg-white relative rounded-[234px] shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                          <div className="flex flex-row items-center size-full">
                            <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
                              <input
                                type="text"
                                value={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                placeholder="Enter first name"
                                className="basis-0 font-['Avenir:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic outline-none relative shrink-0 text-[#717680] text-[16px] bg-transparent"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Last Name */}
                      <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                          <p className="font-['Avenir:Medium',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] text-nowrap whitespace-pre">Last Name</p>
                        </div>
                        <div className="bg-white relative rounded-[234px] shrink-0 w-full">
                          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                            <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
                              <input
                                type="text"
                                value={formData.lastName}
                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                placeholder="Enter last name"
                                className="basis-0 font-['Avenir:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic outline-none relative shrink-0 text-[#717680] text-[16px] bg-transparent"
                              />
                            </div>
                          </div>
                          <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                          <p className="font-['Avenir:Medium',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] text-nowrap whitespace-pre">Email</p>
                        </div>
                        <div className="bg-white relative rounded-[234px] shrink-0 w-full">
                          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                            <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
                              <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="Enter email"
                                className="basis-0 font-['Avenir:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic outline-none relative shrink-0 text-[#717680] text-[16px] bg-transparent"
                              />
                            </div>
                          </div>
                          <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                          <p className="font-['Avenir:Medium',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] text-nowrap whitespace-pre">Phone Number</p>
                        </div>
                        <div className="bg-white relative rounded-[234px] shrink-0 w-full">
                          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                            <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
                              <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                placeholder="Enter phone number"
                                className="basis-0 font-['Avenir:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic outline-none relative shrink-0 text-[#717680] text-[16px] bg-transparent"
                              />
                            </div>
                          </div>
                          <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                        </div>
                      </div>

                      {/* Description */}
                      <div className="content-stretch flex flex-col gap-[6px] h-[152px] isolate items-start relative shrink-0 w-full">
                        <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0 w-full z-[2]">
                          <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                            <p className="font-['Avenir:Medium',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] text-nowrap whitespace-pre">Description</p>
                          </div>
                          <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full">
                            <div className="overflow-clip rounded-[inherit] size-full">
                              <div className="box-border content-stretch flex gap-[8px] items-start px-[14px] py-[12px] relative size-full">
                                <textarea
                                  value={formData.description}
                                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                  placeholder="Write a brief description..."
                                  className="basis-0 font-['Avenir:Regular',_sans-serif] grow h-full leading-[24px] min-h-px min-w-px not-italic outline-none relative shrink-0 text-[#717680] text-[16px] bg-transparent resize-none"
                                />
                              </div>
                            </div>
                            <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[24px] px-0 relative shrink-0 w-full">
                <div className="relative shrink-0 w-full">
                  <div className="size-full">
                    <div className="box-border content-stretch flex flex-col gap-[12px] items-start pb-[16px] pt-0 px-[16px] relative w-full">
                      <button
                        type="submit"
                        disabled={!isFormValid || isSubmitting}
                        className={`relative rounded-[234px] shrink-0 w-full ${
                          isFormValid && !isSubmitting ? 'bg-[#155eef] cursor-pointer' : 'bg-transparent cursor-not-allowed'
                        }`}
                      >
                        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                          <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[10px] relative w-full">
                            <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0">
                              {isSubmitting ? (
                                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              ) : (
                                <p className={`font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre ${
                                  isFormValid ? 'text-white' : 'text-[#a4a7ae]'
                                }`}>Submit</p>
                              )}
                            </div>
                          </div>
                        </div>
                        <div aria-hidden="true" className={`absolute border ${isFormValid && !isSubmitting ? 'border-transparent' : 'border-[#e9eaeb]'} border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]`} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
