import React from "react";

type Props = {
  Icon: React.ComponentType<any>;
  title: string;
  text: string;
};

export default function FeatureCard({ Icon, title, text }: Props) {
  return (
    <>
      <Icon className="text-zinc-400 mb-4" size={24} />
      <h4 className="font-bold text-white mb-1">{title}</h4>
      <p className="text-xs text-zinc-500">{text}</p>
    </>
  );
}
