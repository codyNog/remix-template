import { composeStories } from "@storybook/react";
import { render } from "~/libs/test";
import * as Story from "~/components/Foo/index.stories";

describe("Foo", () => {
  const { FirstStory } = composeStories(Story);
  it("正常にレンダリングされる", () => {
    const { container } = render(<FirstStory />);
    expect(container).toMatchSnapshot();
  });
});
