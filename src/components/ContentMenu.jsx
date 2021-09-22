import React, { useState } from 'react'
import { Button, KIND, SHAPE } from 'baseui/button'
import { Drawer } from 'baseui/drawer'
import Menu from 'baseui/icon/menu'
import { useStyletron } from 'baseui'

const ContentMenu = ({ sections, currentIndex, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [_, theme] = useStyletron()

  return (
    <React.Fragment>
      <Button
        kind={KIND.minimal}
        shape={SHAPE.circle}
        onClick={() =>
          setIsOpen({...isOpen, right: true})
        }
      >
        <Menu size={24} />
      </Button>
      <Drawer
        overrides={{
          DrawerContainer: {
            style: {
              backgroundColor: theme.colors.accent300,
              color: 'white'
            }
          }
        }}
        style={{ width: 'auto', padding: 0 }}
        onClose={() => setIsOpen({ ...isOpen, right: false })}
        isOpen={isOpen.right}
        anchor="right"
      >
        { sections && sections.map((section, i) => ( 
          <div>
            <Button kind={KIND.minimal} style={{ 
              color: currentIndex === i ? 'white': '#ccc',
              fontWeight: currentIndex === i ? 'bold' : 300,
              fontStyle: currentIndex === i ? 'italic': 'normal'
             }} onClick={(e) => {
              e.preventDefault()
              scrollToSection(i)
              setIsOpen({ ...isOpen, right: false })
            }}>
              {`${currentIndex === i ? '>' : ''} ${section.title}`}
            </Button>
          </div>
        ))}
      </Drawer>
    </React.Fragment>
  )
}

export default ContentMenu;
