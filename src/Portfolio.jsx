import Card from "./Card";
import Header from "./Header";

function Portfolio(){
    return (
        <>
            <Header />
            <div id="body-content" style={{paddingLeft: '75px', paddingRight: '75px', paddingTop: '50px', paddingBottom: '20px'}}>
                <h1 style={{alignText: 'center', marginTop: '0px', marginBottom: '50px'}}>
                    Portfolio
                </h1>
                <p style={{marginBottom: '50px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at ex vel ligula consequat viverra. Curabitur consectetur placerat dolor at pretium. Donec vehicula porta nulla in suscipit. Etiam sollicitudin tellus nunc, id scelerisque massa egestas id. Maecenas eu dui lacus. In lacus augue, condimentum sit amet scelerisque sit amet, congue nec turpis. Nam feugiat lacus congue ex posuere ullamcorper. Proin vel pellentesque nulla, at laoreet nisl. Etiam finibus ex quis quam pretium accumsan. Nullam efficitur dui lorem, eu finibus ipsum congue id.

                Aenean id justo sollicitudin, efficitur odio nec, pulvinar tellus. Suspendisse semper, dolor ut congue dignissim, est felis tristique mauris, sit amet luctus urna urna eget diam. Nunc sit amet fringilla neque, non hendrerit dolor. Morbi tincidunt massa in aliquet volutpat. Donec nec risus vel lectus ultricies dapibus ac nec leo. Nunc nunc mi, ornare eu euismod at, faucibus nec felis. Pellentesque in facilisis ipsum. Nulla venenatis vitae enim in feugiat.

                Nullam volutpat facilisis leo, sit amet convallis metus. Pellentesque volutpat mattis malesuada. Nam at felis vel sem efficitur porta. Nunc id urna vitae nibh pulvinar maximus. In hac habitasse platea dictumst. Mauris sit amet tortor posuere urna finibus sollicitudin et sodales justo. Mauris et mi at tortor viverra condimentum bibendum eget augue. Maecenas eget leo sed libero elementum semper.</p>
                <Card setMargin='50px'/>
                <Card setMargin='50px' imgLeft={true}/>
                <Card />
            </div>
        </>
    )
}

export default Portfolio;