import React from 'react'
import {
  Dropdown,
  DropdownList,
  MenuToggle,
  DropdownGroup,
  DropdownItem,
  Divider,
} from '@patternfly/react-core'
import { Release } from '../../types'
import versions from '../../versions.json'

export const DocumentReleaseDropdown: React.FunctionComponent = () => {
  const latestRelease = versions.Releases.find(
    (version) => version.latest,
  ) as Release
  const previousReleases = Object.values(versions.Releases).filter(
    (version) => !version.hidden && !version.latest,
  ) as Release[]

  const [isDropdownOpen, setDropdownOpen] = React.useState(false)

  const getDropdownItem = (version: Release, isLatest = false) => (
    <DropdownItem
      itemId={version.name}
      key={version.name}
      to={isLatest ? '/' : `/${version.name}`}
    >
      {`Release ${version.name}`}
    </DropdownItem>
  )

  return (
    <Dropdown
      onSelect={() => setDropdownOpen(!isDropdownOpen)}
      onOpenChange={(isOpen) => setDropdownOpen(isOpen)}
      isOpen={isDropdownOpen}
      toggle={(toggleRef) => (
        <MenuToggle
          ref={toggleRef}
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          isExpanded={isDropdownOpen}
        >
          {`Release ${latestRelease.name}`}
        </MenuToggle>
      )}
      popperProps={{ position: 'right' }}
    >
      <DropdownGroup key="Latest" label="Latest">
        <DropdownList>{getDropdownItem(latestRelease, true)}</DropdownList>
      </DropdownGroup>
      {previousReleases.length > 0 && (
        <DropdownGroup key="Previous releases" label="Previous releases">
          <DropdownList>
            {previousReleases
              .slice(0, 3)
              .map((version) => getDropdownItem(version))}
          </DropdownList>
        </DropdownGroup>
      )}
      <Divider key="divider1" />
      <DropdownGroup key="Previous versions" label="Previous versions">
        <DropdownList>
          <DropdownItem
            key="PatternFly 5"
            className="ws-patternfly-versions"
            isExternalLink
            to="https://v5-archive.patternfly.org/"
            itemId="patternfly-5"
          >
            PatternFly 5
          </DropdownItem>
          <DropdownItem
            key="PatternFly 4"
            className="ws-patternfly-versions"
            isExternalLink
            to="http://v4-archive.patternfly.org/v4/"
            itemId="patternfly-4"
          >
            PatternFly 4
          </DropdownItem>
          <DropdownItem
            key="PatternFly 3"
            className="ws-patternfly-versions"
            isExternalLink
            to="https://pf3.patternfly.org/"
            itemId="patternfly-3"
          >
            PatternFly 3
          </DropdownItem>
        </DropdownList>
      </DropdownGroup>
    </Dropdown>
  )
}
