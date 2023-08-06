import Button from "../Button";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

// 创建一个 describe 分组
describe("Button", () => {
  // 编写测试用例test
  test("mount @vue/test-utils", () => {
    // 使用 shallowMount 初始化组件
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });
    //断言
    expect(wrapper.text()).toBe("Button");
  });

  // 测试color分组
  describe("color", () => {
    test("default", () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: "Button",
        },
      });
      expect(
        wrapper
          .classes()
          .map((v) => v.replace("\n", ""))
          .includes("bg-blue-500")
      ).toBe(true);
    });
    test("red", () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: "Button",
        },
        props: {
          color: "red",
        },
      });
      expect(
        wrapper
          .classes()
          .map((v) => v.replace("\n", ""))
          .includes("bg-red-500")
      ).toBe(true);
    });
  });

  describe("round", () => {
    test("default", () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: "Button",
        },
      });

      expect(
        wrapper
          .classes()
          .map((v) => v.replace("\n", ""))
          .includes("rounded-lg")
      ).toBe(true);
    });

    test("round:true", () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: "Button",
        },
        props: {
          round: true,
        },
      });

      expect(
        wrapper
          .classes()
          .map((v) => v.replace("\n", ""))
          .includes("rounded-full")
      ).toBe(true);
    });
  });

  describe("plain", () => {
    test("default", () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: "Button",
        },
      });

      expect(
        wrapper
          .classes()
          .map((v) => v.replace("\n", ""))
          .includes("bg-blue-500")
      ).toBe(true);
    });

    test("plain:true", () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: "Button",
        },
        props: {
          plain: true,
        },
      });

      expect(
        wrapper
          .classes()
          .map((v) => v.replace("\n", ""))
          .includes("bg-blue-100")
      ).toBe(true);
    });
  });

  test("icon", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        icon: "edit",
      },
    });

    expect(
      wrapper
        .find("i")
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("i-ic-baseline-edit")
    ).toBe(true);
  });
});
