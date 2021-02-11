import React from "react";

const LinkItem = ({ text, url }) => (
  <a
    href={url}
    className="mr-2 p-3 text-white bg-blue-500 rounded-lg underline"
  >
    {text}
  </a>
);

export default function LinkSection() {
  return (
    <div className="mt-5">
      <LinkItem text="Github" url="https://github.com/Oyveloper" />

      <LinkItem
        text="Linkedin"
        url="https://www.linkedin.com/in/%C3%B8yvind-monsen-aa74101b3/"
      />
    </div>
  );
}
