"use client";

import {
  FaHtml5,
  FaCss3,
  FaJava,
  FaNodeJs,
  FaReact,
  FaAngular,
  FaJira,
  FaPython,
  FaVuejs,
  FaJenkins,
  FaDocker,
  FaLinux,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiSpringboot,
  SiHibernate,
  SiExpress,
  SiDjango,
  SiFlask,
  SiCplusplus,
  SiAmazondynamodb,
} from "react-icons/si";
import { DiNpm, DiPostgresql } from "react-icons/di";
import { VscGithubInverted, VscVscode } from "react-icons/vsc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAws,
  faGolang,
  faGitlabSquare,
  fa,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// Prgramming
const programmingSkills = {
  title: "Programming",
  description:
    "Mastering Diverse Tools and Technologies for Innovative Software Solutions.",
  skillList: [
    {
      icon: <FaJava />,
      name: "Java/J2EE",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
    },
    {
      icon: <SiCplusplus />,
      name: "C++",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FontAwesomeIcon icon={faDatabase} size="0.5x" />,
      name: "SQL",
    },
    {
      icon: <FontAwesomeIcon icon={faGolang} size="0.5x" />,
      name: "Go",
    },
    // {
    //   icon: <SiTailwindcss />,
    //   name: "Tailwind CSS",
    // },
    {
      icon: <FaLinux />,
      name: "Bash",
    },
  ],
};

// Database
const databases = {
  title: "Databases",
  skillList: [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115c-.28-.394-.53-.954-.735-1.44c-.036.495-.055.685-.523 1.184c-.723.566-4.438 3.682-4.74 10.02c-.282 5.912 4.27 9.435 4.888 9.884l.07.05A74 74 0 0 1 11.91 24h.481a29 29 0 0 1 .51-3.07c.417-.296.604-.463.85-.693a11.34 11.34 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218m-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695c-.381-.045-.765-1.76-.765-2.405"
          />
        </svg>
      ),
      name: "MongoDB",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273c.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333c-.04-.047-.046-.094-.08-.14c-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a51 51 0 0 0-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a73 73 0 0 0-.195 4.41H0q.083-2.95.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095q.363 3.024.428 5.53zm4.017-4.08q-.567 3.069-1.492 4.46q-.723 1.074-1.583 1.073q-.228 0-.566-.138v-.494q.166.026.386.026q.402 0 .647-.222q.295-.27.295-.605q0-.233-.23-.944L6.23 14.615h.91l.727 2.36q.247.804.205 1.123q.6-1.598.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5q.136-.113.255-.25q.649-.76.648-2.253q0-2.745-2.155-2.746q-1.056 0-1.65.697q-.646.762-.646 2.245q-.001 1.459.574 2.14q.524.615 1.583.615q.396 0 .725-.098l1.325.772l.36-.622zM15.5 17.588q-.337-.541-.337-1.736q0-2.09 1.27-2.09q.666 0 .977.5q.336.543.336 1.723q0 2.107-1.27 2.108q-.667 0-.978-.5zm-1.658-.425q0 .706-.516 1.156q-.514.45-1.384.45c-.543 0-1.064-.172-1.573-.515l.237-.476q.656.329 1.19.328q.498 0 .783-.22a.75.75 0 0 0 .3-.615c0-.33-.23-.61-.648-.845c-.388-.213-1.163-.657-1.163-.657c-.422-.307-.632-.636-.632-1.177q0-.674.47-1.085q.471-.416 1.22-.415q.769 0 1.4.41l-.213.476a2.7 2.7 0 0 0-1.064-.23q-.425 0-.654.206a.69.69 0 0 0-.248.524c0 .328.234.61.666.85c.393.215 1.187.67 1.187.67c.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188c-.1.04-.26.04-.274.167c.055.053.063.14.11.214c.08.134.218.313.346.407q.208.167.427.31c.26.16.555.255.81.416c.145.094.293.213.44.313c.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214c-.067-.067-.134-.127-.2-.193a3.2 3.2 0 0 0-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106c.227-.06.435-.047.67-.106q.16-.042.32-.094v-.06c-.12-.12-.21-.283-.334-.395a9 9 0 0 0-1.104-.823c-.21-.134-.476-.22-.697-.334c-.08-.04-.214-.06-.26-.127c-.12-.146-.19-.34-.275-.514a18 18 0 0 1-.547-1.163c-.12-.262-.193-.523-.34-.763c-.69-1.137-1.437-1.826-2.586-2.5c-.247-.14-.543-.2-.856-.274c-.167-.008-.334-.02-.5-.027c-.11-.047-.216-.174-.31-.235c-.38-.24-1.364-.76-1.644-.072c-.18.434.267.862.422 1.082c.115.153.26.328.34.5c.047.116.06.235.107.356c.106.294.207.622.347.897c.073.14.153.287.247.413c.054.073.146.107.167.227c-.094.136-.1.334-.154.5c-.24.757-.146 1.693.194 2.25c.107.166.362.534.703.393c.3-.12.234-.5.32-.835c.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555c.206.328.566.668.867.895c.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.5 3.5 0 0 1-.35-.4a9 9 0 0 1-.747-1.218c-.11-.21-.202-.436-.29-.643c-.04-.08-.04-.2-.107-.24c-.1.146-.247.273-.32.453c-.127.288-.14.642-.188 1.01c-.027.007-.014 0-.027.014c-.214-.052-.287-.274-.367-.46c-.2-.475-.233-1.238-.06-1.785c.047-.14.247-.582.167-.716c-.042-.127-.174-.2-.247-.303a2.5 2.5 0 0 1-.24-.427c-.16-.374-.24-.788-.414-1.162c-.08-.173-.22-.354-.334-.513c-.127-.18-.267-.307-.368-.52c-.033-.073-.08-.194-.027-.274c.014-.054.042-.075.094-.09c.088-.072.335.022.422.062c.247.1.455.194.662.334c.094.066.195.193.315.226h.14c.214.047.455.014.655.073c.355.114.675.28.962.46a5.95 5.95 0 0 1 2.085 2.286c.08.154.115.295.188.455c.14.33.313.663.455.982c.14.315.275.636.476.897c.1.14.502.213.682.286c.133.06.34.115.46.188c.23.14.454.3.67.454c.11.076.443.243.463.378"
          />
        </svg>
      ),
      name: "MySQL",
    },
    {
      icon: <DiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <SiAmazondynamodb />,
      name: "DynamoDB",
    },
  ],
};

// Libraries and Frameworks
const librariesAndFrameworks = {
  title: "Libraries and Frameworks",
  skillList: [
    {
      icon: <FaNodeJs />,
      name: "NodeJS",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaAngular />,
      name: "Angular",
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJS",
    },
    {
      icon: <FaVuejs />,
      name: "VueJS",
    },
    // {
    //   icon: <SiFlask />,
    //   name: "Flask",
    // },
    // {
    //   icon: <SiDjango />,
    //   name: "Django",
    // },
    {
      icon: <SiExpress />,
      name: "ExpressJS",
    },
    {
      icon: <SiHibernate />,
      name: "Hibernate",
    },
    {
      icon: <SiSpringboot />,
      name: "Spring Boot",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m10.204 14.35l.007.01l-.999 2.413a5.17 5.17 0 0 1-2.075-2.597l2.578-.437l.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.14 5.14 0 0 0-.73 3.255l2.514-.725zm1.145-1.98a.44.44 0 0 0 .699-.337l.01-.005l.15-2.62a5.14 5.14 0 0 0-3.01 1.442l2.147 1.523zm.76 2.75l.723.349l.722-.347l.18-.78l-.5-.623h-.804l-.5.623l.179.779zm1.5-3.095a.44.44 0 0 0 .7.336l.008.003l2.134-1.513a5.2 5.2 0 0 0-2.992-1.442l.148 2.615zm10.876 5.97l-5.773 7.181a1.6 1.6 0 0 1-1.248.594l-9.261.003a1.6 1.6 0 0 1-1.247-.596l-5.776-7.18a1.58 1.58 0 0 1-.307-1.34L2.1 5.573c.108-.47.425-.864.863-1.073L11.305.513a1.6 1.6 0 0 1 1.385 0l8.345 3.985c.438.209.755.604.863 1.073l2.062 8.955c.108.47-.005.963-.308 1.34m-3.289-2.057c-.042-.01-.103-.026-.145-.034c-.174-.033-.315-.025-.479-.038c-.35-.037-.638-.067-.895-.148c-.105-.04-.18-.165-.216-.216l-.201-.059a6.5 6.5 0 0 0-.105-2.332a6.5 6.5 0 0 0-.936-2.163c.052-.047.15-.133.177-.159c.008-.09.001-.183.094-.282c.197-.185.444-.338.743-.522c.142-.084.273-.137.415-.242c.032-.024.076-.062.11-.089c.24-.191.295-.52.123-.736s-.506-.236-.745-.045c-.034.027-.08.062-.111.088c-.134.116-.217.23-.33.35c-.246.25-.45.458-.673.609c-.097.056-.239.037-.303.033l-.19.135a6.55 6.55 0 0 0-4.146-2.003l-.012-.223c-.065-.062-.143-.115-.163-.25c-.022-.268.015-.557.057-.905c.023-.163.061-.298.068-.475c.001-.04-.001-.099-.001-.142c0-.306-.224-.555-.5-.555c-.275 0-.499.249-.499.555l.001.014c0 .041-.002.092 0 .128c.006.177.044.312.067.475c.042.348.078.637.056.906a.55.55 0 0 1-.162.258l-.012.211a6.42 6.42 0 0 0-4.166 2.003l-.18-.128c-.09.012-.18.04-.297-.029c-.223-.15-.427-.358-.673-.608c-.113-.12-.195-.234-.329-.349l-.111-.088a.6.6 0 0 0-.348-.132a.48.48 0 0 0-.398.176c-.172.216-.117.546.123.737l.007.005l.104.083c.142.105.272.159.414.242c.299.185.546.338.743.522c.076.082.09.226.1.288l.16.143a6.46 6.46 0 0 0-1.02 4.506l-.208.06c-.055.072-.133.184-.215.217c-.257.081-.546.11-.895.147c-.164.014-.305.006-.48.039c-.037.007-.09.02-.133.03l-.004.002l-.007.002c-.295.071-.484.342-.423.608c.061.267.349.429.645.365l.007-.001l.01-.003l.129-.029c.17-.046.294-.113.448-.172c.33-.118.604-.217.87-.256c.112-.009.23.069.288.101l.217-.037a6.5 6.5 0 0 0 2.88 3.596l-.09.218c.033.084.069.199.044.282c-.097.252-.263.517-.452.813c-.091.136-.185.242-.268.399c-.02.037-.045.095-.064.134c-.128.275-.034.591.213.71c.248.12.556-.007.69-.282v-.002c.02-.039.046-.09.062-.127c.07-.162.094-.301.144-.458c.132-.332.205-.68.387-.897c.05-.06.13-.082.215-.105l.113-.205a6.45 6.45 0 0 0 4.609.012l.106.192c.086.028.18.042.256.155c.136.232.229.507.342.84c.05.156.074.295.145.457c.016.037.043.09.062.129c.133.276.442.402.69.282c.247-.118.341-.435.213-.71c-.02-.039-.045-.096-.065-.134c-.083-.156-.177-.261-.268-.398c-.19-.296-.346-.541-.443-.793c-.04-.13.007-.21.038-.294c-.018-.022-.059-.144-.083-.202a6.5 6.5 0 0 0 2.88-3.622c.064.01.176.03.213.038c.075-.05.144-.114.28-.104c.266.039.54.138.87.256c.154.06.277.128.448.173c.036.01.088.019.13.028l.009.003l.007.001c.297.064.584-.098.645-.365c.06-.266-.128-.537-.423-.608M16.4 9.701l-1.95 1.746v.005a.44.44 0 0 0 .173.757l.003.01l2.526.728a5.2 5.2 0 0 0-.108-1.674A5.2 5.2 0 0 0 16.4 9.7zm-4.013 5.325a.44.44 0 0 0-.404-.232a.44.44 0 0 0-.372.233h-.002l-1.268 2.292a5.16 5.16 0 0 0 3.326.003l-1.27-2.296zm1.888-1.293a.44.44 0 0 0-.27.036a.44.44 0 0 0-.214.572l-.003.004l1.01 2.438a5.15 5.15 0 0 0 2.081-2.615l-2.6-.44z"
          />
        </svg>
      ),
      name: "Kubernetes",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M9.71 2.136a1.43 1.43 0 0 0-2.047 0h-.007a1.48 1.48 0 0 0-.421 1.042c0 .41.161.777.422 1.039l.007.007c.257.264.616.426 1.019.426c.404 0 .766-.162 1.027-.426l.003-.007c.261-.262.421-.629.421-1.039c0-.408-.159-.777-.421-1.042zM8.683 22.295c.404 0 .766-.167 1.027-.429l.003-.008c.261-.261.421-.631.421-1.036c0-.41-.159-.778-.421-1.044H9.71a1.42 1.42 0 0 0-1.027-.432a1.4 1.4 0 0 0-1.02.432h-.007c-.26.266-.422.634-.422 1.044c0 .406.161.775.422 1.036l.007.008c.258.262.617.429 1.02.429m7.89-4.462c.359-.096.683-.33.882-.684l.027-.052a1.47 1.47 0 0 0 .114-1.067a1.45 1.45 0 0 0-.675-.896l-.021-.014a1.43 1.43 0 0 0-1.078-.132c-.36.091-.684.335-.881.686c-.2.349-.241.75-.146 1.119c.099.363.33.691.675.896h.002c.346.203.737.239 1.101.144m-6.405-7.342a2.08 2.08 0 0 0-1.485-.627c-.58 0-1.103.242-1.482.627c-.378.385-.612.916-.612 1.507s.233 1.124.612 1.514a2.08 2.08 0 0 0 2.967 0c.379-.39.612-.923.612-1.514s-.233-1.122-.612-1.507m-.835-2.51c.843.141 1.6.552 2.178 1.144h.004c.092.093.182.196.265.299l1.446-.851a3.2 3.2 0 0 1-.047-1.808a3.15 3.15 0 0 1 1.456-1.926l.025-.016a3.06 3.06 0 0 1 2.345-.306c.77.21 1.465.721 1.898 1.482v.002c.431.757.518 1.626.313 2.408a3.15 3.15 0 0 1-1.456 1.928l-.198.118h-.02a3.1 3.1 0 0 1-2.154.201a3.13 3.13 0 0 1-1.514-.944l-1.444.848a4.16 4.16 0 0 1 0 2.879l1.444.846c.413-.47.939-.789 1.514-.944a3.04 3.04 0 0 1 2.371.319l.048.023v.002a3.17 3.17 0 0 1 1.408 1.906a3.22 3.22 0 0 1-.313 2.405l-.026.053l-.003-.005a3.15 3.15 0 0 1-1.867 1.436a3.1 3.1 0 0 1-2.371-.318v-.006a3.16 3.16 0 0 1-1.456-1.927a3.2 3.2 0 0 1 .047-1.805l-1.446-.848a4 4 0 0 1-.265.294l-.004.005a3.94 3.94 0 0 1-2.178 1.138v1.699a3.1 3.1 0 0 1 1.56.862l.002.004c.565.572.914 1.368.914 2.243c0 .873-.35 1.664-.914 2.239l-.002.009a3.1 3.1 0 0 1-2.21.931a3.1 3.1 0 0 1-2.206-.93h-.002v-.009a3.2 3.2 0 0 1-.916-2.239c0-.875.35-1.672.916-2.243v-.004h.002a3.1 3.1 0 0 1 1.558-.862v-1.699a3.93 3.93 0 0 1-2.176-1.138l-.006-.005a4.1 4.1 0 0 1-1.173-2.874c0-1.122.452-2.136 1.173-2.872h.006a3.95 3.95 0 0 1 2.176-1.144V6.289a3.14 3.14 0 0 1-1.558-.864h-.002v-.004a3.2 3.2 0 0 1-.916-2.243c0-.871.35-1.669.916-2.243l.002-.002A3.08 3.08 0 0 1 8.683 0c.861 0 1.641.355 2.21.932v.002h.002c.565.574.914 1.372.914 2.243c0 .876-.35 1.667-.914 2.243l-.002.005a3.14 3.14 0 0 1-1.56.864zm8.121-1.129l-.012-.019a1.45 1.45 0 0 0-.87-.668a1.43 1.43 0 0 0-1.103.146h.002c-.347.2-.58.529-.677.896c-.095.365-.054.768.146 1.119l.007.009c.2.347.519.579.874.673c.357.103.755.059 1.098-.144l.019-.009a1.47 1.47 0 0 0 .657-.885a1.5 1.5 0 0 0-.141-1.118"
          />
        </svg>
      ),
      name: "Kafka",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <DiNpm />,
      name: "NPM",
    },
  ],
};

// Tools data
const tools = {
  title: "Tools",
  description:
    "Mastering Diverse Tools and Technologies for Innovative Software Solutions.",
  skillList: [
    {
      icon: <FontAwesomeIcon icon={faAws} size="0.5x" />,
      name: "AWS",
    },
    {
      icon: <FontAwesomeIcon icon={faGitlabSquare} size="0.5x" />,
      name: "GitLab",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428c6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099m2.471 7.485a.86.86 0 0 0-.593.25l-4.453 4.453l-.307-.307l-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753m-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032a.06.06 0 0 1 .01-.073l.645-.645zm-2.803-.459l1.172-1.172l.879.878l-1.979.426a.074.074 0 0 1-.085-.039a.07.07 0 0 1 .013-.093m-3.646 6.058a.076.076 0 0 1-.069-.083a.1.1 0 0 1 .022-.046h.002l.946-.946l1.222 1.222zm2.425-1.256a.23.23 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934l-.294-.295l3.762-3.758l1.82-.393l.874.874c-1.255 1.102-2.971 2.201-5.1 3.268m5.279-3.428h-.002l-.839-.839l4.699-4.125a1 1 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091m3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.12.12 0 0 0 0 .169l1.247 1.247a1.82 1.82 0 0 1-2.093-.343m2.578 0a1.7 1.7 0 0 1-.271.218h-.001l-1.207-1.207l1.533-1.533c.661.72.637 1.832-.054 2.522m-.1-1.544a.14.14 0 0 0-.053.157a.42.42 0 0 1-.053.45a.14.14 0 0 0 .023.197a.14.14 0 0 0 .084.03a.14.14 0 0 0 .106-.05a.69.69 0 0 0 .087-.751a.14.14 0 0 0-.194-.033"
          />
        </svg>
      ),
      name: "Postman",
    },
    {
      icon: <VscGithubInverted />,
      name: "GitHub",
    },
    {
      icon: <VscVscode />,
      name: "VSCode",
    },
    {
      icon: <FaJira />,
      name: "Jira",
    },
    {
      icon: <FaJenkins />,
      name: "Jenkins",
    },
  ],
};

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="skills"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-center">
                  <h3 className="text-4xl font-bold">
                    {programmingSkills.title}
                  </h3>
                </div>
                <ul className="grid grid-cols-2 sm-grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {programmingSkills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <br />
              <br />
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-center">
                  <h3 className="text-4xl font-bold">{databases.title}</h3>
                </div>
                <ul className="grid grid-cols-2 sm-grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {databases.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <br />
              <br />
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-center">
                  <h3 className="text-4xl font-bold">
                    {librariesAndFrameworks.title}
                  </h3>
                </div>
                <ul className="grid grid-cols-2 sm-grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {librariesAndFrameworks.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <br />
              <br />
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-center">
                  <h3 className="text-4xl font-bold">{tools.title}</h3>
                </div>
                <ul className="grid grid-cols-2 sm-grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {tools.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Skills;
