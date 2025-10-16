"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";
import FirstPage from "./firsts/page";
import About from "./about/page";
import Projects from "./projects/page";
import Skills from "./skills/page";
import Contact from "./contact/page";
import { useTranslation } from "react-i18next";
import {Project,Skill} from "./types/projetc";
import LanguageSwitcher from "./components/languageSwitcher";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("common"); // On utilise le namespace "common"

  const sectionAnim: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const projects_i18n = t("projects.projects_list", { returnObjects: true });

// Vérifier que c'est bien un tableau avant de mapper
const projects: Project[] = Array.isArray(projects_i18n)
  ? (projects_i18n as Project[]).map((p) => ({
      title: p.title,
      description: p.description,
      tech: p.tech,
      desktop_alt: p.desktop_alt,
      mobile_alt: p.mobile_alt,
      link: p.link || "#", // fallback si link est manquant
      cta_view: p.cta_view || "Voir l'application", // fallback
      desktop_gif:p.desktop_gif,
      mobile_gif:p.mobile_gif
    }))
  : [];

const skills_i18n = t("competence.skills_list", { returnObjects: true });

// Vérifier que c'est un tableau avant de mapper
const skills_list: Skill[] = Array.isArray(skills_i18n)
  ? (skills_i18n as Skill[]).map((s) => ({
      name: s.name,
      desc: s.desc,
    }))
  : [];


  const sectionClass =
    "min-h-[85vh] flex flex-col items-center px-6 py-12 md:py-16 scroll-mt-24";

  return (
    <>
      {/* Section Accueil */}
      <FirstPage
        greeting={t("home.greeting")}
        description={t("home.description")}
        subtext={t("home.subtext")}
        cta_projects={t("home.cta_projects")}
        cta_download={t("home.cta_download")}
      />

      {/* Section À propos */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionAnim}
        className={`${sectionClass} bg-white dark:bg-gray-900`}
      >
        <About
          title={t("about.title")}
          role={t("about.role")}
          web_stack={t("about.web_stack")}
          mobile_stack={t("about.mobile_stack")}
          description_1={t("about.description_1")}
          description_2={t("about.description_2")}
          cta_contact={t("about.cta_contact")}
        />
      </motion.section>

      {/* Section Projets */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionAnim}
        className={`${sectionClass} bg-gray-50 dark:bg-gray-900`}
      >
        <Projects
        title={t("projects.title")}
        projects_list={projects}
        cta_contact={t("projects.cta_contact")}
        />
      </motion.section>

      {/* Section Compétences */}
      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionAnim}
        className={`${sectionClass} bg-white dark:bg-gray-900`}
      >
        <Skills
         title={t("competence.title")}
         skills_list={skills_list}
         cta_contact={t("competence.cta_contact")}
        />
      </motion.section>

      {/* Section Contact */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionAnim}
        className={`${sectionClass} bg-gray-50 dark:bg-gray-900`}
      >
        <Contact
          title={t("contact.title")}
          description={t("contact.description")}
          form_description={t("contact.form_description")}
          form_name={t("contact.form_name")}
          form_email={t("contact.form_email")}
          form_message={t("contact.form_message")}
          form_submit={t("contact.form_submit")}
          form_sending={t("contact.form_sending")}
          status_success={t("contact.status_success")}
          status_error={t("contact.status_error")}
          cta_whatsapp={t("contact.cta_whatsapp")}
          cta_facebook={t("contact.cta_facebook")}
          cta_linkedin={t("contact.cta_linkedin")}
        />
      </motion.section>
    </>
  );
}
