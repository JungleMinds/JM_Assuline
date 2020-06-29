/**
 * Some simple test examples, please do not blatenty copy these
 */

import React from "react"
import { shallow, mount } from "enzyme"

import Header, { HomeLink } from "./header"

describe("Header", () => {
  it("renders correctly", () => {
    const Component = shallow(<Header siteTitle="Default Starter" />)
    expect(Component.find(HomeLink).props()).toHaveProperty("to", "/")
    expect(Component.find(HomeLink).text()).toBe("Default Starter")
  })

  it("adds styling to the HomeLink", () => {
    const Component = mount(<HomeLink to="/" />)
    expect(Component).toHaveStyleRule("color", "white")
  })
})
