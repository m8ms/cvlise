import { createMuiTheme } from 'material-ui/styles';

//const x = getMuiTheme({
//    fontFamily: 'Catamaran, monospace',
//    palette: {
//        primary1Color: '#0288D1', //$color-brand
//        primary2Color: '#028734', //$color-analog-2
//        primary3Color: '#2802d1', //$color-analog-1
//        alternateTextColor: '#111',
//        borderColor: 'rgba(255, 255, 255, 0.3)',
//        canvasColor: '#303030',
//        clockCircleColor: 'rgba(255, 255, 255, 0.12)',
//        disabledColor: 'rgba(255, 255, 255, 0.3)',
//        pickerHeaderColor: 'rgba(255, 255, 255, 0.12)',
//        accent1Color: '#d14702', //$color-opposite
//        accent2Color: '#d17b02', //$color-compl-1
//        accent3Color: '#d11302', //$color-compl-2
//        secondaryTextColor: 'rgba(153, 153, 153, .7)',
//        textColor: 'rgb(153, 153, 153)', //$color-mid-gray
//    }
//});


export default createMuiTheme({
    palette: {
        type: 'dark',
        text: 'rgb(153, 153, 153)',
        background: '#111',
        primary: {
            main: '#0288D1'
        },
        secondary: {
            main: '#d17b02'
        },
        error: {
            main: '#d14702'
        }
    },
    typography: {
        // Use the system font over Roboto.
        fontFamily: 'Catamaran, monospace'
    }
})
