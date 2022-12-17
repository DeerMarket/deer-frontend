import CatMenu from "./_/CatMenu";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <CatMenu />
      {children}
      <style>{`
        body {
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAQMAAAAk8RryAAAABlBMVEXd3d39/f1xnp1AAAAAAnRSTlNAQPA2w60AAAGISURBVBjTDdA9SxxRFMbxp81XsNkPILoQIQFD3Fu5pViYKSwtAhYrEmISxLnTaCEESwnLuBAIwdcFi8juZpyTJqQwLiK+ocwUCqsZ1wlZnHFzZ+Z42/PA4ccf/pux1bhFaGavnYM+gfqZtF+EhJGl+ymlLDjuV8NjAh+mp3mT8DyeuTk+IaTcyFVcgvxfZbtBCHjAu7YFSk7vuHEFONedlANCtFG6ZQVEKrXTHmD281tjeZ5QcGtmVwr8LfTVKg+EsqF2y0r/db2loiRsZL+z3g8CU92LzWKT8OxIbkYdglm8qw+EAoON8uTDJeH7bCD9TwKtJDGl9pZU3JK+QM3O5k/7LTQ7e9GN9o6p6SC3YsHPHOYVwlxZrnttgW+3/Gd81EIY75x3dYctb0FxYOG9bHa3HX3/VTWGtadevXtyrztUt4Z2KgWBXMLMESErDP0MfeALt7nzg7CuNfIlIY7zfr6t94nk1T/dyQzXoqBE2I/r/LEBLKeH7tMR3XU7cd9NE8IodcJF8QgGAe8Uybjj2wAAAABJRU5ErkJggg==);
          background-repeat: repeat;
        }
        
        body::after, body::before {
            content: "";
            display: block;
            position: fixed;
            z-index: -1;
        }
          body::before {
            background-image: url("https://www.deermarket.org/g3.png");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center center;
            transform: rotate(45deg);
            top: 5vh;
            height: 70vh;
            left: -5vh;
            width: 50vw;
            min-width: 300px;
            min-height: 700px;
            opacity: 0.5;
        }

        body::after {
            background-image: url("https://www.deermarket.org/g5.png");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center center;
            bottom: 10px;
            right: -5vw;
            height: 50vw;
            width: 50vw;
            min-width: 300px;
            min-height: 500px;
            transform: rotate(45deg);
            opacity: 0.5;
        }
      `}</style>
    </div>
  );
}
