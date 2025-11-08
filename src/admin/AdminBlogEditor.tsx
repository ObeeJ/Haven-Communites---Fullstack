import { useState, useRef } from 'react';
import svgPaths from "../imports/svg-2am5f2yyei";

interface BlogFormData {
  title: string;
  category: string;
  shortDescription: string;
  coverImage: File | null;
  coverImageUrl: string;
  content: string;
  contentImages: File[];
}

interface AdminBlogEditorProps {
  blogId?: string;
  onSave?: (data: BlogFormData) => void;
  onCancel?: () => void;
  onPreview?: (data: BlogFormData) => void;
  onLogout?: () => void;
}

// Logo Component
function LogoGroup() {
  return (
    <div className="h-[21.72px] relative shrink-0 w-[48.49px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 22">
        <g id="Group 1000003696">
          <path d={svgPaths.p27cf2e80} fill="var(--fill-0, #155EEF)" id="Vector 2" />
          <path d={svgPaths.p14e48780} fill="var(--fill-0, #155EEF)" id="Vector 1" />
        </g>
      </svg>
    </div>
  );
}

function LogoFrame() {
  return (
    <div className="content-stretch flex flex-col gap-[4.5px] items-center relative shrink-0 w-[105px]">
      <LogoGroup />
      <p className="font-['Times_New_Roman:Regular',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[#155eef] text-[24px] w-[min-content]">H A V E N</p>
      <p className="font-['Microsoft_Sans_Serif:Regular',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[#155eef] text-[8.25px] text-center w-[min-content]">C O M M U N I T I E S</p>
    </div>
  );
}

export default function AdminBlogEditor({ blogId, onSave, onCancel, onPreview, onLogout }: AdminBlogEditorProps) {
  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    category: '',
    shortDescription: '',
    coverImage: null,
    coverImageUrl: '',
    content: '',
    contentImages: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  
  const coverImageInputRef = useRef<HTMLInputElement>(null);
  const contentImageInputRef = useRef<HTMLInputElement>(null);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    if (onLogout) {
      onLogout();
    }
  };

  const handleCoverImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData(prev => ({ ...prev, coverImage: file, coverImageUrl: imageUrl }));
    }
  };

  const handleContentImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files);
      setFormData(prev => ({ ...prev, contentImages: [...prev.contentImages, ...newImages] }));
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  const handlePreview = () => {
    if (onPreview) {
      onPreview(formData);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/admin/blog-posts', {
      //   method: blogId ? 'PUT' : 'POST',
      //   headers: {
      //     'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
      //   },
      //   body: formDataToSend,
      // });

      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (onSave) {
        onSave(formData);
      }
      
      console.log('Blog post saved:', formData);
    } catch (error) {
      console.error('Failed to save blog post:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full">
      {/* Header */}
      <div className="content-stretch flex flex-col gap-[10px] h-[112px] items-start relative shrink-0 w-[1440px]">
        <div className="h-[112px] relative shrink-0 w-full">
          <div className="absolute content-stretch flex flex-col h-[112px] items-center justify-center left-0 right-0 top-0">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1320px]">
              <LogoFrame />
              <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
                <button className="box-border content-stretch cursor-pointer flex flex-col items-center overflow-visible p-0 relative shrink-0">
                  <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] not-italic text-[#475467] text-[16px] text-nowrap whitespace-pre">Admin</p>
                </button>
                <button className="box-border content-stretch cursor-pointer flex flex-col items-center overflow-visible p-0 relative shrink-0">
                  <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] not-italic text-[#475467] text-[16px] text-nowrap whitespace-pre">Blog</p>
                </button>
                <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-[76px]">
                  <button className="box-border content-stretch cursor-pointer flex flex-col items-start overflow-visible p-0 relative shrink-0">
                    <div className="bg-[#f2f4f7] relative rounded-[200px] shrink-0 size-[40px]">
                      <div className="absolute inset-0 opacity-[0.08] rounded-[200px]">
                        <div aria-hidden="true" className="absolute border-[0.75px] border-black border-solid inset-0 pointer-events-none rounded-[200px]" />
                      </div>
                      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-1/2 not-italic text-[#475467] text-[16px] text-center top-[calc(50%-12px)] translate-x-[-50%] w-[40px]">JS</p>
                    </div>
                  </button>
                  <button onClick={handleLogout} className="overflow-clip relative shrink-0 size-[24px]">
                    <div className="absolute inset-[14.09%_12.5%]">
                      <div className="absolute inset-[-5.8%_-5.56%]" style={{ "--stroke-0": "rgba(232, 61, 61, 1)" } as React.CSSProperties}>
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <path d={svgPaths.p4b81600} stroke="var(--stroke-0, #E83D3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white box-border content-stretch flex flex-col gap-[32px] items-center pb-[48px] pt-[32px] px-0 relative shrink-0 w-full">
        <div className="relative shrink-0 w-full">
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[32px] py-0 relative w-full">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[20px] items-start ml-0 mt-0 relative w-[1376px]">
                  <p className="font-['Avenir:Heavy',sans-serif] leading-[38px] not-italic relative shrink-0 text-[#155eef] text-[30px] w-full">Publish a blog</p>
                </div>
              </div>
              <p className="font-['Avenir:Medium',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#475467] text-[16px] w-[min-content]">Publish a blog for your users</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full">
        <div className="max-w-[1280px] relative shrink-0 w-full">
          <div className="flex flex-col items-center max-w-inherit size-full">
            <div className="box-border content-stretch flex flex-col gap-[24px] items-center max-w-inherit px-[32px] py-0 relative w-full">
              <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[640px] relative shrink-0 w-full">
                {/* Formatting Toolbar */}
                <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[512px]">
                    <button type="button" className="basis-0 box-border content-stretch cursor-pointer flex flex-col gap-[8px] grow items-start max-w-[240px] min-h-px min-w-px overflow-visible p-0 relative shrink-0">
                      <div className="bg-white relative rounded-[8px] shrink-0 w-full">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
                            <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
                              <p className="font-['Avenir:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] text-nowrap whitespace-pre">Regular</p>
                            </div>
                            <div className="overflow-clip relative shrink-0 size-[20px]">
                              <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]">
                                <div className="absolute inset-[-16.67%_-8.33%]" style={{ "--stroke-0": "rgba(102, 112, 133, 1)" } as React.CSSProperties}>
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7">
                                    <path d={svgPaths.p1b1fa300} stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                      </div>
                    </button>
                    
                    <div className="content-stretch cursor-pointer flex gap-[4px] items-start relative shrink-0">
                      <button type="button" className="block overflow-clip relative rounded-[6px] shrink-0 size-[32px]">
                        <div className="absolute bottom-[31.25%] left-[34.38%] right-[32.03%] top-1/4">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 14">
                            <path d={svgPaths.pd251900} fill="var(--fill-0, #98A2B3)" />
                          </svg>
                        </div>
                      </button>
                      <button type="button" className="block overflow-clip relative rounded-[6px] shrink-0 size-[32px]">
                        <div className="absolute bottom-[31.25%] left-[31.25%] right-[31.25%] top-1/4">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
                            <path d={svgPaths.p21c6dc00} fill="var(--fill-0, #98A2B3)" />
                          </svg>
                        </div>
                      </button>
                      <button type="button" className="block overflow-clip relative rounded-[6px] shrink-0 size-[32px]">
                        <div className="absolute inset-[34.38%_18.75%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 10">
                            <path d={svgPaths.pe305d80} fill="var(--fill-0, #98A2B3)" />
                          </svg>
                        </div>
                      </button>
                      <button type="button" className="block overflow-clip relative rounded-[6px] shrink-0 size-[32px]">
                        <div className="absolute inset-[26.56%_21.09%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 15">
                            <path d={svgPaths.p1598f00} fill="var(--fill-0, #98A2B3)" />
                          </svg>
                        </div>
                      </button>
                      <button type="button" className="block overflow-clip relative rounded-[6px] shrink-0 size-[32px]">
                        <div className="absolute bottom-1/4 left-[21.88%] right-[18.75%] top-1/4">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 16">
                            <path d={svgPaths.p10c2e00} fill="var(--fill-0, #98A2B3)" />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Cover Photo Upload */}
                  <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[640px]">
                    <div className="content-stretch flex flex-col items-start max-w-[280px] min-w-[200px] relative shrink-0 w-full">
                      <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] w-full">Cover Photo</p>
                    </div>
                    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                      <div 
                        onClick={() => coverImageInputRef.current?.click()}
                        className="bg-white relative rounded-[12px] shrink-0 w-full cursor-pointer hover:bg-gray-50"
                      >
                        <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[12px]" />
                        <div className="flex flex-col items-center size-full">
                          <div className="box-border content-stretch flex flex-col gap-[4px] items-center px-[24px] py-[16px] relative w-full">
                            <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
                              <div className="bg-white relative rounded-[8px] shrink-0 size-[40px]">
                                <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                                <div className="absolute left-[10px] overflow-clip size-[20px] top-[10px]">
                                  <div className="absolute inset-[12.5%_8.33%]">
                                    <div className="absolute inset-[-5.56%_-5%]" style={{ "--stroke-0": "rgba(71, 84, 103, 1)" } as React.CSSProperties}>
                                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 17">
                                        <path d={svgPaths.p2822b520} stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full">
                                <div className="content-stretch flex gap-[4px] items-start justify-center relative shrink-0 w-full">
                                  <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#00359e] text-[14px] text-nowrap whitespace-pre">Click to upload</p>
                                  <p className="font-['Avenir:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] text-nowrap whitespace-pre">or drag and drop</p>
                                </div>
                                <p className="font-['Avenir:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#475467] text-[12px] text-center w-full">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <input
                        ref={coverImageInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleCoverImageUpload}
                        className="hidden"
                      />
                      {formData.coverImageUrl && (
                        <img src={formData.coverImageUrl} alt="Cover preview" className="w-full h-48 object-cover rounded-lg" />
                      )}
                    </div>
                  </div>

                  {/* Blog Title */}
                  <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[640px]">
                    <div className="content-stretch flex flex-col gap-[6px] items-start max-w-[640px] relative shrink-0 w-[640px]">
                      <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[640px]">
                        <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap whitespace-pre">Blog Title</p>
                        <div className="bg-white relative rounded-[8px] shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                          <div className="flex flex-row items-center size-full">
                            <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
                              <input
                                type="text"
                                value={formData.title}
                                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                                placeholder="Enter title"
                                className="basis-0 font-['Avenir:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[16px] bg-transparent border-none outline-none placeholder:text-[#98a2b3]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Blog Category */}
                <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[640px]">
                  <div className="box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-start max-w-[640px] overflow-visible p-0 relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
                      <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap whitespace-pre">Blog Category</p>
                      <div className="bg-white relative rounded-[8px] shrink-0 w-full">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
                            <select
                              value={formData.category}
                              onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                              className="basis-0 font-['Avenir:Medium',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[16px] bg-transparent border-none outline-none"
                            >
                              <option value="">Select</option>
                              <option value="Homes">Homes</option>
                              <option value="Investment">Investment</option>
                              <option value="Construction">Construction</option>
                              <option value="Land">Land</option>
                            </select>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Short Description */}
                <div className="content-stretch flex flex-col gap-[32px] h-[276px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[12px] h-[276px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[6px] h-[154px] items-start relative shrink-0 w-full">
                        <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap whitespace-pre">Short Description</p>
                        <div className="bg-white h-[250px] relative rounded-[8px] shrink-0 w-full">
                          <div className="overflow-clip rounded-[inherit] size-full">
                            <div className="box-border content-stretch flex gap-[8px] h-[250px] items-start px-[14px] py-[12px] relative w-full">
                              <textarea
                                value={formData.shortDescription}
                                onChange={(e) => setFormData(prev => ({ ...prev, shortDescription: e.target.value }))}
                                placeholder="Enter short description"
                                className="basis-0 font-['Avenir:Regular',sans-serif] grow h-full leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[16px] bg-transparent border-none outline-none resize-none placeholder:text-[#98a2b3]"
                              />
                            </div>
                          </div>
                          <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Image Upload */}
                <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[640px]">
                  <div className="content-stretch flex flex-col items-start max-w-[280px] min-w-[200px] relative shrink-0 w-full">
                    <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] w-full">Upload</p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                    <div 
                      onClick={() => contentImageInputRef.current?.click()}
                      className="bg-white relative rounded-[12px] shrink-0 w-full cursor-pointer hover:bg-gray-50"
                    >
                      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[12px]" />
                      <div className="flex flex-col items-center size-full">
                        <div className="box-border content-stretch flex flex-col gap-[4px] items-center px-[24px] py-[16px] relative w-full">
                          <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
                            <div className="bg-white relative rounded-[8px] shrink-0 size-[40px]">
                              <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                              <div className="absolute left-[10px] overflow-clip size-[20px] top-[10px]">
                                <div className="absolute inset-[12.5%_8.33%]">
                                  <div className="absolute inset-[-5.56%_-5%]" style={{ "--stroke-0": "rgba(71, 84, 103, 1)" } as React.CSSProperties}>
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 17">
                                      <path d={svgPaths.p2822b520} stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full">
                              <div className="content-stretch flex gap-[4px] items-start justify-center relative shrink-0 w-full">
                                <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#00359e] text-[14px] text-nowrap whitespace-pre">Click to upload</p>
                                <p className="font-['Avenir:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] text-nowrap whitespace-pre">or drag and drop</p>
                              </div>
                              <p className="font-['Avenir:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#475467] text-[12px] text-center w-full">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <input
                      ref={contentImageInputRef}
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleContentImageUpload}
                      className="hidden"
                    />
                  </div>
                </div>

                {/* Main Content */}
                <div className="content-stretch flex flex-col gap-[32px] h-[925px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[12px] h-[276px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[6px] h-[154px] items-start relative shrink-0 w-full">
                        <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap whitespace-pre">Write here</p>
                        <div className="bg-white h-[844px] relative rounded-[8px] shrink-0 w-full">
                          <div className="overflow-clip rounded-[inherit] size-full">
                            <div className="box-border content-stretch flex gap-[8px] h-[844px] items-start px-[14px] py-[12px] relative w-full">
                              <textarea
                                value={formData.content}
                                onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                                placeholder="Write your blog content here..."
                                className="basis-0 font-['Avenir:Regular',sans-serif] grow h-full leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[16px] bg-transparent border-none outline-none resize-none placeholder:text-[#98a2b3]"
                              />
                            </div>
                          </div>
                          <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[20px] items-center justify-end relative shrink-0 w-full">
                    <div className="basis-0 content-stretch flex gap-[12px] grow items-center justify-end min-h-px min-w-px relative shrink-0">
                      <button 
                        type="button"
                        onClick={handleCancel}
                        className="bg-white relative rounded-[8px] shrink-0"
                      >
                        <div className="box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit]">
                          <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0">
                            <p className="font-['Avenir:Heavy',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap whitespace-pre">Cancel</p>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                      </button>
                      <button 
                        type="button"
                        onClick={handlePreview}
                        className="bg-[#155eef] relative rounded-[8px] shrink-0"
                      >
                        <div className="box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit]">
                          <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0">
                            <p className="font-['Avenir:Heavy',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
                              {isLoading ? 'Saving...' : 'Preview'}
                            </p>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[#155eef] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
