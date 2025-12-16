import { render } from "@testing-library/react";
import { ClearSVG } from "./FilterSvg";

describe("ClearSVG", () => {
  it("должен рендериться", () => {
    const { container } = render(<ClearSVG />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
