import React, { Fragment } from 'react'
import { Grid, Paper, Typography, List } from '@material-ui/core'
import { ListItem, ListItemText } from '@material-ui/core/'

const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 500
    }
}

export default ({
    exercises,
    category,
    onSelect,
    exercise: { 
        id,
        title = 'Welcomne!',
        description = 'Please select an exercise from the list on the left' } }) =>
    <Grid container>
        <Grid item sm>
            <Paper style={styles.Paper}>
                {exercises.map(([group, exercises]) =>
                    !category || category === group
                    ?
                    <Fragment key={group}>
                        <Typography
                            variant="h6"
                            style={{textTransform: 'capitalize'}}
                        >
                            {group}
                        </Typography>
                        <List component="ul">
                            {exercises.map(({ id,  title }) =>
                                <ListItem
                                    key={id}
                                    button
                                    onClick={() => onSelect(id)}
                                >
                                    <ListItemText primary={title} />
                                </ListItem>                                
                            )}
                        </List>
                    </Fragment>
                    : null
                )}
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={styles.Paper}>

                <Typography
                    variant="subtitle1"
                >
                    {title}
                </Typography>
                <Typography
                    variant="subheading"
                    style={{marginTop: 20}}
                >
                    {description}
                </Typography>
            </Paper>
        </Grid>
    </Grid>