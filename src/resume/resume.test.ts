import resume from "./resume.json";
import { Resume } from "./types";

const typed: Resume = resume;

describe("resume data (JSON Resume shape)", () => {
  it("has the basics", () => {
    expect(typed.basics.name).toBe("Jared Willow");
    expect(typed.basics.location.city).toBe("Las Vegas");
  });

  it("has profiles with a network and an https url", () => {
    expect(typed.basics.profiles.length).toBeGreaterThan(0);
    typed.basics.profiles.forEach(({ network, url }) => {
      expect(network).toBeTruthy();
      expect(url).toMatch(/^https:\/\//);
    });
  });

  it("has work entries with a name and a summary", () => {
    expect(typed.work.length).toBeGreaterThan(0);
    typed.work.forEach(({ name, summary }) => {
      expect(name).toBeTruthy();
      expect(summary).toBeTruthy();
    });
  });

  it("uses YYYY-MM dates", () => {
    typed.work.forEach(({ startDate, endDate }) => {
      [startDate, endDate].forEach((date) => {
        if (date) expect(date).toMatch(/^\d{4}-\d{2}$/);
      });
    });
  });

  it("has projects with a name and description", () => {
    expect(typed.projects.length).toBeGreaterThan(0);
    typed.projects.forEach(({ name, description }) => {
      expect(name).toBeTruthy();
      expect(description).toBeTruthy();
    });
  });
});
