export const useFoo = () => {
  return {}
};

if (process.env.NODE_ENV === "test" && import.meta.vitest) {
const { renderHook } = await import("@testing-library/react");

describe("useFoo", () => {
  it("初期状態", async () => {
    const { result } = renderHook(() => useFoo());
    expect(result.current).toStrictEqual({});
  });
})}
