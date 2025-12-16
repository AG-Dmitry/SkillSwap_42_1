import { render } from "@testing-library/react";
import { SortSvg } from "./SortSvg";

describe("SortSvg", () => {
  it("должен рендериться", () => {
    const { container } = render(<SortSvg />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
