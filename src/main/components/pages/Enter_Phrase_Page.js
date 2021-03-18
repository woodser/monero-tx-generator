import React from 'react';
import ReactDOM from 'react-dom';
import {Page_Box, Page_Box_Margin, Header, Main_Content, Page_Text_Entry} from '../Widgets.js';
import {UI_Button_Link, UI_Text_Link} from '../Buttons.js';

export default function Enter_Phrase_Page(props) {
  return(
    <Page_Box className="page_box_flex">
      <Header text={props.header}/>
      <Page_Box_Margin />
      <Main_Content>
      	<Page_Text_Entry 
      	  isDefault={true} 
      	  className="enter_phrase_box "
	  defaultValue="Enter backup phrase..." 
	  handleTextChange={props.handleTextChange}
      	  isactive={props.textEntryIsActive === undefined ? true : props.textEntryIsActive}
      	  isValid={props.isValid}
	/>
	<Page_Box_Margin />
	{props.children}
      </Main_Content>
      <Page_Box_Margin />
      <div className="home_button_links">
      	<UI_Button_Link 
      	  destination={props.continueDestination} 
      	  handleClick={props.handleContinue}
      	  setCurrentHomePage={props.setCurrentHomePage}
      	  isactive={props.buttonsAreActive}
      	>
      	  {props.buttonContents}
      	</UI_Button_Link>
      	
      	<UI_Text_Link 
      	  link_text="Or Go Back" 
      	  destination={props.backDestination} 
      	  handleClick={props.handleBack} 
      	  setCurrentHomePage={props.setCurrentHomePage}
      	  isActive={props.buttonsAreActive}
      	/>
      </div>
    </Page_Box>
  );
}