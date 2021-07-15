import React from 'react'
import { 
    makeStyles,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Box,
    Grid,
    Hidden,
    TextField,
    InputBase,
    InputAdornment

 } from '@material-ui/core'
 import MenuIcon from '@material-ui/icons/Menu';
 import AccountCircle from '@material-ui/icons/AccountCircle';
 import VideoCall from '@material-ui/icons/VideoCall';
 import MoreVert from '@material-ui/icons/MoreVert';
 import AppsIcon from '@material-ui/icons/Apps';
 import IconHome from '@material-ui/icons/Home';
 import IconExplore from '@material-ui/icons/Explore';
 import IconSubscriptions from '@material-ui/icons/Subscriptions';
 import IconVideoLibrary from '@material-ui/icons/VideoLibrary';
 import IconHistory from '@material-ui/icons/History';
 import IconOndemandVideo from '@material-ui/icons/OndemandVideo';
 import IconWatchLater from '@material-ui/icons/WatchLater';
 import IconThumbUp from '@material-ui/icons/ThumbUp';
 import IconExpandMore from '@material-ui/icons/ExpandMore';
 import SearchIcon from '@material-ui/icons/Search';
 import KeyboardIcon from '@material-ui/icons/Keyboard';
 import MicIcon from '@material-ui/icons/Mic';

 const videos = [
    {
      id: 1,
      title:
        'Acessibilidade no Teclado React Native',
      channel: 'Allisson Tech',
      views: '11 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb1.png',
    },
    {
      id: 2,
      title:
        'Como usar Ícones no React-Native | Vector-icons',
      channel: 'Allisson Tech',
      views: '917 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb2.png',
    },
    {
      id: 3,
      title:
        'Clone do App CredNosso React native',
      channel: 'Allisson Tech',
      views: '206 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb3.png',
    },
    {
      id: 4,
      title:
        'Como criar a Interface do Instagram para Iniciante 📱 React Native 📲',
      channel: 'Allisson Tech',
      views: '5,2 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb4.png',
    },
    {
      id: 5,
      title:
        'Landing Page com HTML/CSS/ JAVASCRIPT simples',
      channel: 'Allisson Tech',
      views: '2,9 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.png',
      thumb: '/images/thumb5.png',
    },
    {
      id: 6,
      title: 'Projeto simples React Native',
      channel: 'Allisson Tech',
      views: '233 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb6.png',
    },
    {
      id: 7,
      title:
        'Acessibilidade no Teclado React Native',
      channel: 'Allisson Tech',
      views: '518 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb1.png',
    },
    {
      id: 8,
      title:
        'Como criar a Interface do Instagram para Iniciante 📱 React Native 📲',
      channel: 'Allisson Tech',
      views: '8,9 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb4.png',
    },
  ];



const useStyles = makeStyles((theme) => ({
    root:{
    //   background: theme.palette.primary.main,
      height: '100vh',
    //   padding: theme.spacing(3)
    },
    margin: {
      margin: theme.spacing(1),
    },
  
    appBar:{
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1
    },
    drawer: {
        width: 240,
        flexShrink: 0,
      },
      drawerPaper: {
        width: 240,
        borderRight: 'none'
      },
      listItemText:{
        fontSize: 14
      },
    grow:{
        flexGrow: 1
    },
    icons:{
        paddingRight: theme.spacing(3)
    },
    menuIcon:{
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2)
    },
    Logo:{
        height: 28
    },
    listItem:{
        paddingTop: 4,
        paddingBottom: 4
    },
    TitleSub:{
        color: '#606060',
        paddingLeft: 15,
        fontSize: 14,
        textTransform: 'uppercase'
    },
    ImageSub:{
        height: 28,
        width: 28,
        borderRadius: '50%'
    },
    listItemSub:{
        paddingTop: 3,
        paddingBottom: 10
    },
    ButtonBar:{
        borderRadius: 60,
        marginLeft: 10,
        textTransform: 'capitalize',    
    },
    ButtonBarOne:{
        borderRadius: 60,
        marginLeft: 10,
        textTransform: 'capitalize',
        backgroundColor: '#000',
        color: '#fff',
        "&:hover": {
            background: "#efe0000",
            color: '#000'
          },
    },

    ContainerButton:{
        padding: 10
    },
    Content:{
        paddingTop: 10
    },
    search: {
        backgroundColor: '#ccc',
        width: '50%',
        position: 'relative',
        marginLeft: 150,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 5,
       
      },
      searchIcon: {
        padding: 8,
        height: '100%',
        position: 'absolute',     
        display: 'flex',
        alignItems: 'center',
        marginLeft: '93%'
      },
      TextField:{
        // border:  "1px solid #ccc",
        height: 29,
        width: '40%',
        marginLeft: 155,
        flexDirection: 'row',
        borderRadius: 'none',
        '& .MuiOutlinedInput-root': {
          borderRadius: '1px',
        },
      },
      IconTeclado:{
        height: 29,
        borderRadius: 0
      },
      IconTeclado1:{
       marginLeft: -120
      }
      
    
  }));

export default function Home(){

    const classes = useStyles();
    return(
        <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuIcon} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <img src="/images/preto.png" alt="Logo" className={classes.Logo}/>

          
        <TextField
        placeholder="Pesquisa"
        color="secondary"
        variant="outlined"
        fullWidth
        classes={{root: classes.TextField}}
        />
                
        
            <Button classes={{root: classes.IconTeclado}} variant="outlined" size="small"><SearchIcon /></Button>

            <Button classes={{root: classes.IconTeclado1}} size="small" style={{ color: '#757575' }} ><KeyboardIcon/></Button>
                    

            <Button style={{marginLeft: 55}} size="small"  ><MicIcon/></Button>
            

          <div className={classes.grow}/>

          <IconButton className={classes.icons} color="inherit">
            <VideoCall/>
          </IconButton>

          <IconButton  className={classes.icons} color="inherit" >
            <AppsIcon />
          </IconButton>

          <IconButton  className={classes.icons} color="inherit" >
            <MoreVert />
          </IconButton>

          <Button startIcon={<AccountCircle />} variant="outlined" color="secondary">Fazer Login</Button>
        </Toolbar>
      </AppBar>
    <Box display="flex">

    <Hidden mdDown>
        <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>           
              <ListItem button classes={{root: classes.listItem}} style={{backgroundColor: '#e0e0e0'}}>
                <ListItemIcon>{<IconHome color="primary"/>}</ListItemIcon>
                <ListItemText 
                classes={{
                    primary: classes.listItemText
                }}
                
                primary={'Início'} />
              </ListItem>
              
              <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{<IconExplore/>}</ListItemIcon>
                <ListItemText 
                classes={{
                    primary: classes.listItemText
                }}
                primary={'Explorar'} />
              </ListItem>

              <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{<IconSubscriptions/>}</ListItemIcon>
                <ListItemText 
                classes={{
                    primary: classes.listItemText
                }}
                primary={'Início'} />
              </ListItem>

          </List>
          <Divider />
          <List>           
              <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{<IconVideoLibrary/>}</ListItemIcon>
                <ListItemText 
                classes={{
                    primary: classes.listItemText
                }}
                primary={'Biblioteca'} />
              </ListItem>
              
              <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{<IconHistory />}</ListItemIcon>
                <ListItemText 
                classes={{
                    primary: classes.listItemText
                }}
                primary={'Histórico'} />
              </ListItem>

              <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{<IconOndemandVideo/>}</ListItemIcon>
                <ListItemText 
                classes={{
                    primary: classes.listItemText
                }}
                primary={'Os seus vídeos'} />
              </ListItem>
              <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{<IconWatchLater/>}</ListItemIcon>
                <ListItemText 
                classes={{
                    primary: classes.listItemText
                }}
                primary={'Ver mais tarde'} />
              </ListItem>

              <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{<IconThumbUp/>}</ListItemIcon>
                <ListItemText 
                classes={{
                    primary: classes.listItemText
                }}
                primary={'Vídeos de que gosto'} />
              </ListItem>

              <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon >{<IconExpandMore/>}</ListItemIcon>
                <ListItemText 
                classes={{
                    primary: classes.listItemText
                }}
                primary={'Mostrar mais'} />
              </ListItem>


          </List>
          <Divider />

                <h3 className={classes.TitleSub}>SUBSCRIÇÕES</h3>
                
                <List>           
              <ListItem button classes={{root: classes.listItemSub}}>
                <ListItemIcon>{<img src="/images/sub.jpg" className={classes.ImageSub}/>}</ListItemIcon>
                <ListItemText 
                classes={{
                    primary: classes.listItemText
                }}
                primary={'Código Fonte TV'} />
              </ListItem>
              
              <ListItem button classes={{root: classes.listItemSub}}>
                <ListItemIcon>{<img src="/images/sub1.jpg" className={classes.ImageSub}/>}</ListItemIcon>
                <ListItemText 
                classes={{
                    primary: classes.listItemText
                }}
                primary={'DevMedia'} />
              </ListItem>

              <ListItem button classes={{root: classes.listItemSub}}>
                <ListItemIcon>{<img src="/images/sub2.jpg" className={classes.ImageSub}/>}</ListItemIcon>
                <ListItemText 
                classes={{
                    primary: classes.listItemText
                }}
                primary={'Alura Cursos Online'} />
              </ListItem>

          </List>
        </div>
      </Drawer>

        </Hidden>
     
     
      <Box p={1}>
      <Divider />
                <Toolbar/>
                <Divider />
               <div className={classes.ContainerButton}>
             
        
               <Button className={classes.ButtonBarOne} variant="contained" size="small">Todos</Button>
               <Button className={classes.ButtonBar} variant="contained" size="small">Música</Button>
               <Button className={classes.ButtonBar} variant="contained" size="small">Em Direto</Button>
               <Button className={classes.ButtonBar} variant="contained" size="small">Javascript</Button>
               <Button className={classes.ButtonBar} variant="contained" size="small">React js Avançado</Button>
               <Button className={classes.ButtonBar} variant="contained" size="small">Os cavaleiros do Zodíaco</Button>
               <Button className={classes.ButtonBar} variant="contained" size="small">Bita e os Animais</Button>

               </div>
               <Divider />
                <Grid container spacing={2} className={classes.Content}>
                {
                 videos.map((item, index) => (
                     <Grid item lg={3} md={4} sm={6} xs={12}>
                          <Box>
                                <img
                                style={{width: '100%'}}
                                alt={item.title}
                                src={item.thumb}
                                />
                                <Box>
                                    <Typography
                                    style={{fontWeight: 600}}
                                    gutterBottom
                                    variant='body1'
                                    color='textPrimary'
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                    display='block'
                                    variant='body2'
                                    color='textSecondary'
                                    >
                                        {item.channel}
                                    </Typography>
                                    <Typography
                                    variant='body2'
                                    color='textSecondary'
                                    >
                                        {`${item.views} * ${item.date}`}
                                    </Typography>
                                </Box>
                         </Box>
                     </Grid>
                    
                 ))
                }
                </Grid>
              
            </Box>
      </Box>

    </div>
       
    );
}