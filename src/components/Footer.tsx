const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Muhammad Zain Abbas. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
