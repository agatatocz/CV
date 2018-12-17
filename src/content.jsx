import React from "react";

const Content = props => {
  const about =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed tortor nulla. Curabitur porta nibh in mi tincidunt aliquam. Nullam enim lacus, mattis nec pretium non, condimentum sit amet mauris. Suspendisse dignissim eros et velit rutrum pharetra. Etiam placerat quam in arcu dapibus tristique. Duis at congue nibh. Curabitur scelerisque arcu at ornare pharetra.Curabitur ipsum dui, hendrerit ut commodo vitae, placerat in turpis. Duis sagittis feugiat tristique. Morbi pulvinar orci mauris, non iaculis justo congue ut. Ut iaculis scelerisque lorem nec aliquet. Donec euismod nec erat ultrices aliquet. Duis et tincidunt sapien, vitae aliquam ante. Suspendisse potenti. Aliquam ac accumsan velit, rhoncus bibendum risus. Nullam et mi sed libero semper mattis a id leo.";
  const technologies =
    "Nunc pharetra diam tellus, ac gravida lorem lobortis sit amet. Aenean urna ex, volutpat nec metus sed, feugiat pellentesque dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quam turpis, congue nec erat a, blandit mollis felis. Etiam sit amet risus in quam ornare consectetur in id lacus. Nam facilisis tellus erat. Etiam tincidunt gravida dictum. Pellentesque venenatis ex in augue ultrices dictum. Nulla eget justo vulputate, volutpat quam vitae, tempus ligula. Nullam eget massa et nunc accumsan posuere faucibus a nunc. Pellentesque dui nisi, luctus eget lacus quis, cursus vestibulum eros. Praesent euismod egestas arcu eget dictum.";
  const contact = (
    <div style={{ textAlign: "center" }}>
      <h4>Zapraszam do kontaktu!</h4>
      <p>
        <br />
        telefon: 602 183 121
        <br />
        e-mail: agatatocz@gmail.com
      </p>
    </div>
  );
  let display;
  switch (props.content) {
    case "technologie":
      display = technologies;
      break;

    case "kontakt":
      display = contact;
      break;

    default:
      display = about;
      break;
  }

  return <article className="content">{display}</article>;
};

export default Content;
