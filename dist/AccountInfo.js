const y=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const t=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const d=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const W=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;const v=window.enmity.modules.common.Moment,{components:e}=window.enmity;e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground,e.KeyboardAvoidingView,e.Modal;const U=e.Pressable;e.RefreshControl;const X=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch;const T=e.Text;e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable;const P=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox;const L=e.FormDivider;e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio;const r=e.FormRow,Q=e.FormSection;e.FormSelect,e.FormSubLabel;const V=e.FormSwitch;e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;function Z(o){window.enmity.plugins.registerPlugin(o)}function l(o){return window.enmity.assets.getIDByName(o)}const u={byProps:(...o)=>window.enmity.modules.filters.byProps(...o),byName:(o,n)=>window.enmity.modules.filters.byName(o,n),byTypeName:(o,n)=>window.enmity.modules.filters.byTypeName(o,n),byDisplayName:(o,n)=>window.enmity.modules.filters.byDisplayName(o,n)};function ee(...o){return window.enmity.modules.bulk(...o)}function te(...o){return window.enmity.modules.getByProps(...o)}window.enmity.modules.common;function oe(o){return window.enmity.patcher.create(o)}var ne="AccountInfo",ie="Test 1.2.6",me="Shows Account Information and Account Assets.",re=[{name:"acquite",id:"581573474296791211"}],le="#ff1f84",ae={name:ne,version:ie,description:me,authors:re,color:le},se=({settings:o})=>{const n=l("ic_selection_checked_24px");return t.createElement(t.Fragment,null,t.createElement(X,null,t.createElement(Q,{title:"Enable Dedicated Buttons"},t.createElement(r,{label:"Profile Picture",trailing:t.createElement(V,{value:o.getBoolean("pfpBtn",!1),onValueChange:()=>{o.toggle("pfpBtn",!1),d.open({content:"Toggled Profile Picture Button",source:n})}})}),t.createElement(L,null),t.createElement(r,{label:"Status",trailing:t.createElement(V,{value:o.getBoolean("statusBtn",!1),onValueChange:()=>{o.toggle("statusBtn",!1),d.open({content:"Toggled Status Button",source:n})}})}))))};function G(o,n,w){return window.enmity.settings.getBoolean(o,n,w)}const[ce,de,ue,O,$,we]=ee(u.byDisplayName("UserProfileHeader",!1),u.byProps("getMember"),u.byProps("getGuild"),u.byProps("transitionToGuild"),u.byProps("setString"),u.byName("HeaderAvatar",!1)),F=oe("account-info"),B=te("getStatus","getState"),ye={...ae,onStart(){F.instead(ce,"default",(o,n,w)=>{var R,_,N,I;let g=G("AccountInfo","pfpBtn",!1),p=G("AccountInfo","statusBtn",!1);const[{user:i,channel:b,type:H}]=n;if(H!==0)return w.apply(o,n);const m=W.createThemedStyleSheet({container:{marginLeft:15.5,marginRight:15.5,marginTop:17.5},header:{color:y.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontFamily:y.Fonts.DISPLAY_BOLD,textTransform:"uppercase",fontSize:12.75,letterSpacing:.25},information:{borderRadius:4,backgroundColor:y.ThemeColorMap.BACKGROUND_TERTIARY,marginTop:10,marginBottom:10},item:{color:y.ThemeColorMap.TEXT_MUTED},icon:{color:y.ThemeColorMap.INTERACTIVE_NORMAL}}),z=l("img_nitro_profile_banner"),Y=l("pending-alert"),j=l("toast_copy_link"),D=l("ic_header_members_add_24px"),x=l("ic_leave_24px"),f=b==null?void 0:b.guild_id,a=f&&de.getMember(b.guild_id,i.id),M=f&&ue.getGuild(b.guild_id),E=f?((R=a==null?void 0:a.getAvatarURL)==null?void 0:R.call(a,!1,4096,!0))||((_=i==null?void 0:i.getAvatarURL)==null?void 0:_.call(i,!1,4096,!0)):(N=i==null?void 0:i.getAvatarURL)==null?void 0:N.call(i,!1,4096,!0);if(!E)return w.apply(o,n);const K=i.discriminator%5,J=typeof E=="number"?`https://cdn.discordapp.com/embed/avatars/${K}.png`:E==null?void 0:E.replace(".webp",".png"),k=B.getActivities(i.id).find(A=>A.type===4);return g||F.after(we,"default",(A,[{user:s}],S)=>{var h;const c=(h=s==null?void 0:s.getAvatarURL)==null?void 0:h.call(s,!1,4096,!0);if(!c)return S;const C=s.discriminator%5,q=typeof c=="number"?`https://cdn.discordapp.com/embed/avatars/${C}.png`:c==null?void 0:c.replace(".webp",".png");return t.createElement(U,{onPress:()=>O.openURL(q)},S)}),p||F.after(B,"default",(A,[{user:s}],S)=>{const h=l("pending-alert"),c=B.getActivities(s.id).find(C=>C.type===4);return t.createElement(U,{onPress:()=>{$.setString(c.state),d.open({content:"Copied to clipboard",source:h})}},S)}),t.createElement(t.Fragment,null,w.apply(o,n),t.createElement(P,{style:m.container},t.createElement(T,{style:m.header},"Account Information"),t.createElement(P,{style:m.information},t.createElement(r,{label:"Created",leading:t.createElement(r.Icon,{style:m.icon,source:D}),onPress:()=>{d.open({content:v(i.createdAt).format("LLL"),source:D})},trailing:()=>t.createElement(T,{style:m.item},v(i.createdAt).fromNow())}),f&&a&&t.createElement(t.Fragment,null,t.createElement(L,null),t.createElement(r,{label:`Joined ${(I=M==null?void 0:M.name)!=null?I:""}`,leading:t.createElement(r.Icon,{style:m.icon,source:x}),onPress:()=>{d.open({content:v(a.joinedAt).format("LLL"),source:x})},trailing:()=>t.createElement(T,{style:m.item},v(a.joinedAt).fromNow())}))),g||p?t.createElement(t.Fragment,null,t.createElement(T,{style:m.header},"Account Assets"),t.createElement(P,{style:m.information},g&&t.createElement(r,{label:`View ${i.username}'s Profile Picture`,leading:t.createElement(r.Icon,{style:m.icon,source:z}),onPress:()=>{O.openURL(J)}}),g&&p&&t.createElement(L,null),k&&p&&t.createElement(t.Fragment,null,t.createElement(r,{label:`Copy ${i.username}'s Status`,leading:t.createElement(r.Icon,{style:m.icon,source:j}),onPress:()=>{$.setString(k.state),d.open({content:"Copied to clipboard",source:Y})}})))):t.createElement(t.Fragment,null)))})},onStop(){F.unpatchAll()},getSettingsPanel({settings:o}){return t.createElement(se,{settings:o})}};Z(ye);
