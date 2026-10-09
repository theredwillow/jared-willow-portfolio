import { formatDateRange, splitLinks } from "./format";

describe("formatDateRange", () => {
  it("formats a closed range", () => {
    expect(formatDateRange("2021-03", "2022-08")).toBe(
      "March 2021 - August 2022"
    );
  });

  it("shows Present when there is no end date", () => {
    expect(formatDateRange("2022-08")).toBe("August 2022 - Present");
  });

  it("returns an empty string when there is no start date", () => {
    expect(formatDateRange()).toBe("");
  });
});

describe("splitLinks", () => {
  it("returns plain text untouched", () => {
    expect(splitLinks("no links here")).toEqual(["no links here"]);
  });

  it("splits markdown-style links out of text", () => {
    expect(splitLinks("see [my site](https://a.com) now")).toEqual([
      "see ",
      { text: "my site", url: "https://a.com" },
      " now",
    ]);
  });

  it("handles several links and a leading link", () => {
    expect(splitLinks("[a](https://a.com) and [b](https://b.com)")).toEqual([
      { text: "a", url: "https://a.com" },
      " and ",
      { text: "b", url: "https://b.com" },
    ]);
  });
});
