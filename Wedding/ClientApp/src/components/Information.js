import React, { Component } from 'react';

export class Information extends Component {
    static displayName = Information.name;

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <div className="cornerbordertop">
            <div className="sidemargin">

                <h3 className="h3font" style={{ marginBottom: '25px' }}>Viktiga detaljer</h3>
                <h5 className="h5font">Barn</h5>
                <p className="bodytext">Vi &auml;lskar barn, men under denna dag vill vi ha en vuxenfest med allt vad det inneb&auml;r (Ammande sp&auml;dbarn &auml;r v&auml;lkomna).</p>

                <h5 className="h5font">G&aring;vor</h5>
                <p className="bodytext">F&ouml;r oss &auml;r den finaste presenten er n&auml;rvaro, men &ouml;nskar ni ge oss en g&aring;va, v&auml;nligen bidra till v&aring;ran br&ouml;llopsresa i ett kuvert p&aring; festen.</p>

                <h5 className="h5font">Upptr&auml;dande</h5>
                <p className="bodytext">Om du &ouml;nskar att framf&ouml;ra n&aring;got under middagen/festen, v&auml;nligen se tillv&auml;gag&aring;ngs&auml;tt under fliken "Toastmasters".</p>

                <h5 className="h5font">Kl&auml;dsel</h5>
                <p className="bodytext">Kavaj</p>

                <h5 className="h5font">Fototgrafering</h5>
                <p className="bodytext">Vi kommer att ha en professionell fotograf under vigseln och festen. Vi r&auml;knar med att f&aring;nga alla v&aring;ra g&auml;ster p&aring; bild helst fr&aring;n er b&auml;sta sida.
                Vi vill g&auml;rna att ni ocks&aring; fotograferar. Ni f&aring;ngar s&auml;kert s&aring;dant som v&aring;r fotograf inte g&ouml;r men var g&auml;rna lite diskreta och f&ouml;rs&ouml;k att inte st&aring; i v&auml;gen f&ouml;r dem. 
                    Anv&auml;nd g&auml;rna v&aring;r hashtag #jesswed2020 i sociala medier.
                </p>

                <h5 className="h5font">Kontakt</h5>
                <p className="bodytext">Ni kan n&aring; oss (brudparet) genom att maila eventuella fr&aring;gor till <a href="mailto:jesswed2020@gmail.com">jesswed2020@gmail.com</a></p>

                
            </div>
            
        </div>
    );
  }
}
