import React from "react";
import Question from "./Question";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

let dataQcm = {
  id: 1,
  title: "Framework React",
  question: "React est-il un framework ?",
  c1: "oui",
  c2: "non",
  response: "c2",
  status: "open",
  success: false,
  choice: null,
  badge: "medium",
};

it("displays the correct contents", () => {
  const question = mount(<Question {...dataQcm} />);
  expect(question).toHaveLength(1);

  const notice = question.find("p.notice");
  expect(
    notice.contains(
      "Choisissez une seule et bonne réponse ci-dessous, attention vous n'avez qu'une tentative pour répondre :"
    )
  ).toBe(true);

  const title = question.find("h1");
  expect(title.contains(dataQcm.title)).toBe(true);
});
