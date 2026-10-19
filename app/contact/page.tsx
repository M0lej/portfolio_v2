"use client";
import {
  ArrowUpRightStroke,
  At,
  Envelope,
  Github,
  Hashtag,
  Linkedin,
  LoaderDots,
  Message,
  RadioCircleMarked,
  Send,
  Youtube,
} from "@boxicons/react";
import Window from "../components/window";
import Form from "next/form";
import IconButton from "../components/icon-button";
import { sendEmail } from "../api/actions/sendEmail";
import { useActionState } from "react";
import Input from "../components/input";
import TextArea from "../components/textareat";
import SubWindow from "../components/sub-window";
import SocialLinkAlt from "../components/social-link-alt";

export default function Contact() {
  const [state, formAction, isPending] = useActionState<
    { success: boolean },
    FormData
  >((_, formData) => sendEmail(formData), { success: false });

  return (
    <div className="max-[570px]:grid grid-rows-[1fr_auto_auto_auto_auto_auto] w-screen p-5 pb-30 gap-3">
      <Window
        title="Kontakt"
        icon={<Envelope />}
        contentClassName="space-y-4 grid grid-cols-[1fr_auto_1fr] gap-20 max-[570px]:grid-cols-[1fr] "
      >
        <section className="space-y-10">
          <h1 className="w-fit bg-text-gradient text-3xl lg:text-4xl xl:text-5xl font-bold py-1 text-transparent bg-clip-text">
            Porozmawiajmy!
          </h1>
          <h2></h2>
          <Form action={formAction} className="space-y-4" type="POST">
            <Input
              icon={<At />}
              label="Email:"
              placeholder="something@domain.sth"
              labelFor="email"
              required
            />
            <Input
              icon={<Hashtag />}
              label="Temat:"
              labelFor="subject"
              required
            />
            <TextArea
              icon={<Message />}
              label="Wiadomość:"
              labelFor="message"
              className="resize-none w-full"
              required
            />

            <div className="w-fit h-fit flex items-center gap-4 ml-auto">
              {state.success && (
                <p className="animate-fade-in">Wysłano wiadomość ✅</p>
              )}
              {isPending && <LoaderDots className="animate-spin" />}
              <IconButton
                icon={<Send />}
                label="Wyślij Wiadomość"
                type="submit"
                filled={!isPending}
                className={`${isPending && "pointer-events-none"} z-10`}
              />
            </div>
          </Form>
        </section>
        <div className="relative self-center h-[80%] w-0.5 bg-about-me-divider-gradient-vertical max-[570px]:hidden"></div>
        <section className="flex flex-col gap-4 max-[570px]:hidden">
          <SubWindow contentClassName="grid grid-cols-[auto_1fr] grid-rows-2 gap-x-2">
            <RadioCircleMarked
              className="fill-lime-400 col-start-1"
              size="md"
            />
            <p className="flex gap-2 items-center bg-clip-text text-transparent bg-linear-to-r from-lime-300 via-emerald-400 to-cyan-300 font-bold text-2xl col-start-2">
              Dostępny
            </p>
            <p className="col-start-2">Otwarty na współprace</p>
          </SubWindow>
          <SubWindow contentClassName="grid grid-cols-[auto_1fr] grid-rows-2 gap-x-2">
            <div className="flex gap-4 items-center">
              <Envelope size="md" />
              <h2 className="font-bold text-2xl">Email</h2>
            </div>
            <br />
            <p>m.olejnik.dev@gmail.com</p>
          </SubWindow>
          <div className="flex justify-between gap-2 h-20 max-[1280px]:flex-col max-[1280px]:h-fit">
            <SocialLinkAlt
              classname="h-full w-full"
              textClassName="min-[1280px]:hidden min-[1490px]:block"
              appName="Github"
              username="M0lej"
              href="https://github.com/M0lej"
              icon={<Github size="lg" />}
            />
            <SocialLinkAlt
              classname="h-full w-full"
              textClassName="min-[1280px]:hidden min-[1490px]:block"
              appName="Youtube"
              username="M0lej"
              href="https://www.youtube.com/@M0l3j"
              icon={<Youtube size="lg" />}
            />
            <SocialLinkAlt
              classname="h-full w-full"
              textClassName="min-[1280px]:hidden min-[1490px]:block"
              appName="LinkedIn"
              username=""
              href="https://www.linkedin.com/in/maksymilian-olejnik-4502363b0/"
              icon={<Linkedin size="lg" />}
            />
          </div>
        </section>
      </Window>
      <Window
        contentClassName="grid grid-cols-[auto_1fr] grid-rows-2 gap-x-2"
        className="min-[570px]:hidden"
      >
        <RadioCircleMarked className="fill-lime-400 col-start-1" size="md" />
        <p className="flex gap-2 items-center bg-clip-text text-transparent bg-linear-to-r from-lime-300 via-emerald-400 to-cyan-300 font-bold text-2xl col-start-2">
          Dostępny
        </p>
        <p className="col-start-2">Otwarty na współprace</p>
      </Window>
      <Window
        contentClassName="grid grid-cols-[auto_1fr] grid-rows-2 gap-x-2"
        className="row-start-3 min-[570px]:hidden"
      >
        <div className="flex gap-4 items-center">
          <Envelope size="md" />
          <h2 className="font-bold text-2xl">Email</h2>
        </div>
        <br />
        <p>m.olejnik.dev@gmail.com</p>
      </Window>
      <SocialLinkAlt
        classname="h-full min-[570px]:hidden"
        appName="Github"
        username="M0lej"
        href="https://github.com/M0lej"
        icon={<Github size="lg" />}
        subwindow={false}
      />
      <SocialLinkAlt
        classname="h-full min-[570px]:hidden"
        appName="Youtube"
        username="M0lej"
        href="https://www.youtube.com/@M0l3j"
        icon={<Youtube size="lg" />}
        subwindow={false}
      />
      <SocialLinkAlt
        classname="h-full min-[570px]:hidden"
        appName="LinkedIn"
        username=""
        href="https://www.linkedin.com/in/maksymilian-olejnik-4502363b0/"
        icon={<Linkedin size="lg" />}
        subwindow={false}
      />
    </div>
  );
}
