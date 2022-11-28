import { View, ActivityIndicator, Text, StyleSheet } from "react-native";

export function toMonthName(monthNumber) {
    
    return monthNumber.toLocaleString('en-US', {
        month: 'long',
    });
};

export function convertDate(date) {
    const day = date.split('-')[2].substring(0, 2);
    const month = date.split('-')[1] - 1
    const year = date.split('-')[0]

    const newDate = new Date(year, month, day)

    return day + ' ' + toMonthName(newDate) + ' ' + year;
    // return date;
};

export function LoadingAnimation() {
    return (
        <View style={estilos.indicatorWrapper}>
            <ActivityIndicator size='large' style={estilos.indicator} />
            {/* <Text style={estiloSheet.indicatorText}>Loading...</Text> */}
        </View>
    );
};


const estilos = StyleSheet.create({
    indicatorWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    indicatorText: {
        fontSize: 18,
        marginTop: 12,
    },
    // indicator: {

    // },
});