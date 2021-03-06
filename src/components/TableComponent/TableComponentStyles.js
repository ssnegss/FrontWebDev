export const getTableComponentStyles = (theme) => {

    return ({
        table: {
            textAlign: 'center',
            padding: '0rem',
            fontSize: '0.9rem',
            fontWeight: '600'
        },
        tableRow: {
            width: "100%",
            height: "100%",
            borderWidth: '0',
            padding: '1rem',
            backgroundColor: 'white',
            outline: 'none',
            cursor: 'pointer',
        },
        tableHeader: {
            backgroundColor: "#D0DBD5",
            textAlign: 'center',
            padding: '1rem',
            fontSize: '0.9rem',
            fontWeight: '600'
        },
        popover__button: {
            width: '100%',
            height: '100%',
            cursor: 'pointer',
            outline: 'none',
            borderWidth: '0',
            padding: '1rem 4rem',
            backgroundColor: 'transparent'
    }
});
}