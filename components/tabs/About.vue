<template>
  <div
    class="page aboutpage"
    :class="{
      'active-page': isActive,
      'animate__animated animate__zoomIn': isActive,
    }"
  >
    <div class="page-wrapper">
      <PageHeader :title="'About me'" :secondaryTitle="'resume'" />
      <section>
        <!-- personal info -->
        <div class="row">
          <div class="col-12 col-lg-6 pers-info">
            <div class="section-title">
              <h3>Personal Info</h3>
            </div>
            <img
              class="img-mobile"
              :src="require('@/assets/my-portrait.jpg')"
            />
            <div class="personal-info">
              <ul>
                <li>
                  <span class="label">First Name</span>
                  <span class="label-value">Bettina</span>
                </li>

                <li>
                  <span class="label">last name</span>
                  <span class="label-value">Kieslich</span>
                </li>

                <li>
                  <span class="label">email</span>
                  <span class="">kieslichbettina@gmail.com</span>
                </li>

                <li>
                  <span class="label">phone</span>
                  <span class="label-value">+49 170 2120 114</span>
                </li>

                <li>
                  <span class="label">github</span>
                  <span class="label-value">
                    <a href="https://github.com/kieslichbettina" target="_blank">
                      <font-awesome-icon :icon="['fas', 'link']" /> View
                      GitHUB</a
                    >
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <a class="button" :href="require('@/assets/resume.pdf')" download>
                <span class="btn-text">Download Resume</span>
                <font-awesome-icon
                  :icon="['fas', 'download']"
                  class="btn-icon"
                />
              </a>
            </div>
          </div>
        </div>

        <!-- Skills -->

        <div class="skills-section">
          <div class="flex">
            <div class="section-title">
              <h3 class="text-center">TOOLS</h3>
              <div class="skills-wrapper">
                <ul class="skills-list">
                  <li v-for="el in skills" :key="el.name">
                    <SkillCard
                      :number="el.level"
                      :text="el.name"
                      :logo="el.logo"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ExperienceCard from "../cards/Experience.vue";
import EducationCard from "../cards/Education.vue";
import SkillCard from "../cards/Skill.vue";
import PageHeader from "../PageHeader.vue";

const reactLogo = require("@/assets/img/svg/react.svg");
const cssLogo = require("@/assets/img/svg/css.svg");
const htmlLogo = require("@/assets/img/svg/html.svg");
const nodejsLogo = require("@/assets/img/svg/nodejs.svg");
const vueLogo = require("@/assets/img/svg/vue.svg");
const jsLogo = require("@/assets/img/svg/js.svg");
const educationLogo = require("@/assets/img/svg/graduation-cap.svg");
const workerLogo = require("@/assets/img/svg/worker.svg");
const figmaLogo = require("@/assets/img/svg/figma-logo.svg");

export default {
  name: "AboutPage",
  props: ["isActive"],
  components: { ExperienceCard, SkillCard, EducationCard, PageHeader },
  data() {
    return {
      experiences: [
        {
          timeline: "Aug 2021 – Jul 2022",
          study: "Software Engineer Intern",
          place: "ALX Africa",
          icon: workerLogo,
          description: [
            `Focused on building multiple projects and learning how to function in a team.
Formed learning groups called buddies, where team members get to collaborate on
the same projects and work together.`,
            `Worked with Git and its various workflows, and Github for collaborating on
projects and contributing to open source.`,
            `Worked on Projects with tight deadlines and learned to quickly pick up multiple
technologies.`,
            `Working with Python, Javascript, and C languages.`,
          ],
        },
        {
          timeline: "Apr 2020 -  Aug 2020",
          study: "Nigerian Petroleum Development Company (NPDC)",
          place: "Industrial Trainee",
          icon: workerLogo,
          description: [
            `Working in a fast-paced and demanding environment as an intern where I was on
hand to respond to incidents from clients while interacting with ICT assets.`,
            `Learned teamwork, building customer relationships, and swift responses to
incidents while properly documenting the resolution.`,
            `Maintained a database of incidents and the clients reporting them and generated
monthly reports.`,
          ],
        },
        {
          timeline: "2016 - 2021",
          study: "Computer Engineering",
          icon: educationLogo,
          place: "University of Benin",
          description: [
            `Software Engineering - Software Development Life Cycle Development Models. Software Analysis, Design, and Modelling. Requirements Engineering.`,
            `Programming - C++ Programming, Java, C#, Prolog, Python.`,
            `Computer Networking - OSI model, IP Addressing, Network Topologies.`,
            `Microprocessors/Microcomputer - Z80, 8085, PIC16. Worked with MPLAB and microC`,
            `Boolean Algebra and Logic Circuit - Adder, Subtractor, Comparator design and prototyping using proteus`,
            `Computer Architecture, Computer Graphics, Digital Signal Processing, Control Systems, Artificial Intelligence, MatLab, Verilog, Cybersecurity`,
          ],
        },
        {
          timeline: "Aug 2021 -  Jun 2022",
          study: "Software Engineering",
          icon: workerLogo,
          place: "ALX Africa",
          description: [
            `One-year hands-on training where we focused on Linux Os, git, C++, and advanced software engineering principles`,
          ],
        },
        {
          timeline: "Oct 2020 -  Mar 2021",
          study: "Cloud Engineering",
          icon: workerLogo,
          place: "AltSchool Africa",
          description: [
            `Six months of training on cloud engineering, the first 3 months dedicated to HTML, CSS, and Javascript, then focused on cloud, Linux, SSH, and Vagrant.`,
          ],
        },
      ],
      skills: [
        {
          name: "Figma",
          level: 75,
          logo: figmaLogo,
        },
        {
          name: "javascript",
          level: 85,
          logo: jsLogo,
        },
        {
          name: "html",
          level: 90,
          logo: htmlLogo,
        },
        {
          name: "css",
          level: 70,
          logo: cssLogo,
        },
      ],
    };
  },
};
</script>
