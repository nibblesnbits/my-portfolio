import { useState, useEffect, useRef } from "react";

const translations = {
  en: {
    greeting: "Hello!",
    message:
      "Thanks so much for visiting The Elsebeneath. I’m Juno Threadborne, the author. I’m thrilled that this story is reaching you.",
    invite:
      "If you’re interested in helping translate or want to see it in your language, please contact me at",
    email: "jthreadborne@gmail.com",
    or: "or fill out this form:",
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdYAYJTbfInDEuSyFupBmVd-zLECV23HrL7hgyGuL-LoBg3Ew/viewform?usp=sharing&ouid=112014812140367339055", // replace with your actual form link
    close: "Close",
  },
  fr: {
    greeting: "Bonjour !",
    message:
      "Merci beaucoup de visiter The Elsebeneath. Je suis Juno Threadborne, l’auteur. Je suis ravi que cette histoire vous parvienne.",
    invite:
      "Si vous souhaitez aider à la traduction ou la lire dans votre langue, contactez-moi à",
    email: "jthreadborne@gmail.com",
    or: "ou remplissez ce formulaire :",
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdYAYJTbfInDEuSyFupBmVd-zLECV23HrL7hgyGuL-LoBg3Ew/viewform?usp=sharing&ouid=112014812140367339055",
    close: "Fermer",
  },
  de: {
    greeting: "Hallo!",
    message:
      "Vielen Dank, dass Sie The Elsebeneath besuchen. Ich bin Juno Threadborne, der Autor. Ich freue mich sehr, dass diese Geschichte Sie erreicht.",
    invite:
      "Wenn Sie bei der Übersetzung helfen möchten oder sie in Ihrer Sprache sehen wollen, schreiben Sie mir bitte an",
    email: "jthreadborne@gmail.com",
    or: "oder füllen Sie dieses Formular aus:",
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdYAYJTbfInDEuSyFupBmVd-zLECV23HrL7hgyGuL-LoBg3Ew/viewform?usp=sharing&ouid=112014812140367339055",
    close: "Schließen",
  },
  zh: {
    greeting: "你好！",
    message:
      "非常感谢你访问 The Elsebeneath。我是作者 Juno Threadborne。很高兴这个故事能传达到你这里。",
    invite: "如果你愿意帮忙翻译，或者想看到用你的语言呈现的版本，请联系我：",
    email: "jthreadborne@gmail.com",
    or: "或者填写此表格：",
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdYAYJTbfInDEuSyFupBmVd-zLECV23HrL7hgyGuL-LoBg3Ew/viewform?usp=sharing&ouid=112014812140367339055",
    close: "关闭",
  },
  ko: {
    greeting: "안녕하세요!",
    message:
      "The Elsebeneath에 방문해 주셔서 감사합니다. 저는 작가 Juno Threadborne입니다. 이 이야기가 여러분에게 닿게 되어 정말 기쁩니다.",
    invite:
      "번역을 돕거나 여러분의 언어로 보고 싶으시면, 다음 주소로 연락해 주세요:",
    email: "jthreadborne@gmail.com",
    or: "또는 이 양식을 작성해 주세요:",
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdYAYJTbfInDEuSyFupBmVd-zLECV23HrL7hgyGuL-LoBg3Ew/viewform?usp=sharing&ouid=112014812140367339055",
    close: "닫기",
  },
  nl: {
    greeting: "Hallo!",
    message:
      "Hartelijk dank voor je bezoek aan The Elsebeneath. Ik ben Juno Threadborne, de auteur. Ik ben erg blij dat dit verhaal jou bereikt.",
    invite:
      "Als je wilt helpen met vertalen of het in jouw taal wilt lezen, neem dan contact met me op via",
    email: "jthreadborne@gmail.com",
    or: "of vul dit formulier in:",
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdYAYJTbfInDEuSyFupBmVd-zLECV23HrL7hgyGuL-LoBg3Ew/viewform?usp=sharing&ouid=112014812140367339055",
    close: "Sluiten",
  },
  cs: {
    greeting: "Ahoj!",
    message:
      "Moc děkuji, že navštěvujete The Elsebeneath. Jsem Juno Threadborne, autor. Jsem nadšený, že se vám tento příběh dostává do rukou.",
    invite:
      "Pokud máte zájem pomoci s překladem nebo chcete vidět příběh ve svém jazyce, kontaktujte mě prosím na",
    email: "jthreadborne@gmail.com",
    or: "nebo vyplňte tento formulář:",
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdYAYJTbfInDEuSyFupBmVd-zLECV23HrL7hgyGuL-LoBg3Ew/viewform?usp=sharing&ouid=112014812140367339055",
    close: "Zavřít",
  },
  tr: {
    greeting: "Merhaba!",
    message:
      "The Elsebeneath’e geldiğiniz için çok teşekkür ederim. Ben Juno Threadborne, yazar. Bu hikâyenin size ulaşmasından büyük mutluluk duyuyorum.",
    invite:
      "Eğer çeviriye yardımcı olmak isterseniz ya da hikâyeyi kendi dilinizde okumak istiyorsanız, lütfen benimle şu adresten iletişime geçin:",
    email: "jthreadborne@gmail.com",
    or: "veya bu formu doldurun:",
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdYAYJTbfInDEuSyFupBmVd-zLECV23HrL7hgyGuL-LoBg3Ew/viewform?usp=sharing&ouid=11201481214036733905",
    close: "Kapat",
  },
};

const languageNames = {
  en: "English",
  fr: "Français",
  de: "Deutsch",
  zh: "中文",
  ko: "한국어",
  nl: "Nederlands",
  cs: "Čeština",
  tr: "Türkçe",
};

export default function TranslateInvite() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal on outside click
  useEffect(() => {
    function onClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", onClickOutside);
    } else {
      document.removeEventListener("mousedown", onClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [isOpen]);

  const t = translations[lang];

  return (
    <>
      {/* FAB button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          aria-label="Translate invitation"
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center text-lg hover:bg-accent group"
          title="Translate invitation"
        >
          🌐
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
          <div
            ref={modalRef}
            className="fixed bottom-20 right-6 z-50 max-w-sm w-[320px] bg-card border border-border rounded-lg shadow-xl p-6 text-base text-foreground"
          >
            <div className="mb-4 font-semibold text-lg">{t.greeting}</div>
            <p className="mb-3">{t.message}</p>
            <p className="mb-2">
              {t.invite}{" "}
              <a
                href={`mailto:${t.email}`}
                className="underline text-accent hover:text-accent-foreground"
              >
                {t.email}
              </a>
            </p>
            <p className="mb-4">
              {t.or}{" "}
              <a
                href={t.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-accent hover:text-accent-foreground"
              >
                Google Form
              </a>
            </p>

            <label htmlFor="language-select" className="block mb-1 font-medium">
              Select Language:
            </label>
            <select
              id="language-select"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="w-full rounded border border-border p-1"
            >
              {Object.entries(languageNames).map(([code, name]) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </select>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full rounded bg-primary text-primary-foreground py-2 hover:opacity-90 transition-opacity"
            >
              {t.close}
            </button>
          </div>
        </>
      )}
    </>
  );
}
