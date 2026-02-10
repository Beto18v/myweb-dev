import { siteContact } from "@/data/site";
import { Section } from "@/components/layout/section";
import { Mail, MessageCircle } from "lucide-react";

export function Contact() {
  const iconMap = {
    Mail,
    MessageCircle,
  };

  return (
    <Section id={siteContact.sectionId} className="bg-muted/50">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-medium uppercase tracking-wider">
            {siteContact.label}
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-foreground tracking-tight text-balance">
            {siteContact.title}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {siteContact.subtitle}
          </p>

          <div className="mt-10 space-y-6">
            {siteContact.contacts.map((contact) => {
              const IconComponent =
                iconMap[contact.icon as keyof typeof iconMap];
              return (
                <div key={contact.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10 text-accent shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      {contact.label}
                    </p>
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {contact.text}
                    </a>
                  </div>
                </div>
              );
            })}
            <p className="text-sm text-muted-foreground pt-4 border-t border-border">
              {siteContact.footerText}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
