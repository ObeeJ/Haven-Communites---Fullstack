import { FC, useState } from 'react';
import { CONTACT_INFO } from '../../constants';

interface NewsletterFormProps {
  className?: string;
}

export const NewsletterForm: FC<NewsletterFormProps> = ({ className = '' }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    const subject = 'Newsletter Subscription';
    const body = `I would like to subscribe to the Haven Communities newsletter.%0D%0AEmail: ${email}`;
    window.open(`mailto:${CONTACT_INFO.newsletterEmail}?subject=${subject}&body=${body}`);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className={`content-stretch flex gap-[16px] items-start relative shrink-0 w-full ${className}`}>
      <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0">
        <div className="bg-white relative rounded-[234px] shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="basis-0 font-['Avenir:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#717680] text-[16px] bg-transparent border-none outline-none"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="bg-[#00359e] relative rounded-[234px] shrink-0 hover:bg-[#002d7a] transition-colors"
      >
        <div className="box-border content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit]">
          <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Subscribe</p>
        </div>
      </button>
    </form>
  );
};