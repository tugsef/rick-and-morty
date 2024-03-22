import React from "react";

function Footer() {
  return (
    <footer>
      <div className="flex flex-col gap-2">
        <span className="text-xs text-slate-500 tracking-widest font-mono">
          Developed by Sefa Demirtaş
        </span>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/tugsef/rick-and-morty"
            className="text-xs text-slate-500 tracking-widest font-mono underline hover:text-slate-700"
          >
            Github
          </a>
          <a
            href="https://linkedin.com/in/sefa-demirtas"
            className="text-xs text-slate-500 tracking-widest font-mono underline hover:text-slate-700"
          >
            Linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
