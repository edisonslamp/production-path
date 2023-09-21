import { classNames } from "shared/lib";

describe("classNames", () => {
    test("with only one first class", () => {
        expect(classNames("someClass")).toBe("someClass");
    });

    test("with class and additional classes", () => {
        expect(classNames("someClass", {}, ["addCls1", "addCls2"])).toBe(
            "someClass addCls1 addCls2",
        );
    });

    test("with class, mods and additional classes", () => {
        expect(
            classNames("someClass", { hovered: true, scrollable: true }, [
                "addCls1",
                "addCls2",
            ]),
        ).toBe("someClass addCls1 addCls2 hovered scrollable");
    });

    test("with class, additional classes and two modes with one of them false", () => {
        expect(
            classNames("someClass", { hovered: true, scrollable: false }, [
                "addCls1",
                "addCls2",
            ]),
        ).toBe("someClass addCls1 addCls2 hovered");
    });

    test("with class, additional classes and two modes with one of them undefined", () => {
        expect(
            classNames("someClass", { hovered: true, scrollable: undefined }, [
                "addCls1",
                "addCls2",
            ]),
        ).toBe("someClass addCls1 addCls2 hovered");
    });
});
