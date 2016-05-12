import React, {Component} from 'react';

export default class About extends Component {
  setVar() {
    Session.set('Meteor.loginButtons.dropdownVisible', true);
  }

  render() {
    return (
      <div>
        <h1>About Us</h1>
        <p>
          Bacon ipsum dolor amet sausage tail andouille cow pancetta pork bacon shankle cupim turducken ham hock. Picanha venison spare ribs short ribs. Fatback rump cow prosciutto ribeye turkey filet mignon beef. Tongue ground round shankle pork belly chicken frankfurter drumstick jerky kevin rump. Frankfurter kevin pastrami bacon doner ground round.
        </p>
        <p>
          Jerky strip steak ground round ribeye, frankfurter landjaeger tenderloin chicken tongue drumstick biltong. Short ribs spare ribs sirloin chicken ham hock, fatback shankle t-bone meatball pancetta flank. Meatball shankle tri-tip, picanha pork chop ham venison shank sausage ball tip strip steak. Shoulder tail leberkas, cupim sirloin corned beef ribeye flank. Strip steak meatloaf picanha tongue prosciutto porchetta sausage ham hock kielbasa. Pig landjaeger porchetta, short ribs alcatra boudin doner meatball jerky chuck beef pork chop tri-tip fatback drumstick. Alcatra tongue leberkas, ham sirloin biltong porchetta beef.
        </p>
        <p>
          Spare ribs bresaola ball tip brisket boudin jerky. Turkey flank ribeye turducken pork belly shoulder jowl short ribs swine meatball venison doner corned beef. Cow shank beef shankle tail. Strip steak drumstick ham hock fatback. Beef ribs sausage pancetta spare ribs ham swine, pastrami meatball ground round landjaeger bacon shankle boudin cupim pork loin.
        </p>
        <button onClick={this.setVar}>Sign Up</button>
      </div>
    )
  }
}
