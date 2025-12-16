import { render } from "@testing-library/react";
import { LogOutSvg } from "./LogoutSvg";

describe("LogOutSvg", () => {
  it("должен рендериться", () => {
    const { container } = render(<LogOutSvg />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
