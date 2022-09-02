const S=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const e=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const u=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const V=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;const P=window.enmity.modules.common.Moment,{components:t}=window.enmity;t.Alert,t.Button,t.FlatList,t.Image,t.ImageBackground,t.KeyboardAvoidingView,t.Modal;const k=t.Pressable;t.RefreshControl;const Q=t.ScrollView;t.SectionList,t.StatusBar,t.StyleSheet,t.Switch;const L=t.Text;t.TextInput,t.TouchableHighlight,t.TouchableOpacity,t.TouchableWithoutFeedback,t.Touchable;const D=t.View;t.VirtualizedList,t.Form,t.FormArrow,t.FormCTA,t.FormCTAButton,t.FormCardSection,t.FormCheckbox;const E=t.FormDivider;t.FormHint,t.FormIcon,t.FormInput,t.FormLabel,t.FormRadio;const o=t.FormRow,R=t.FormSection;t.FormSelect,t.FormSubLabel;const T=t.FormSwitch;t.FormTernaryCheckBox,t.FormText,t.FormTextColors,t.FormTextSizes;function ee(n){window.enmity.plugins.registerPlugin(n)}function i(n){return window.enmity.assets.getIDByName(n)}const p={byProps:(...n)=>window.enmity.modules.filters.byProps(...n),byName:(n,a)=>window.enmity.modules.filters.byName(n,a),byTypeName:(n,a)=>window.enmity.modules.filters.byTypeName(n,a),byDisplayName:(n,a)=>window.enmity.modules.filters.byDisplayName(n,a)};function M(...n){return window.enmity.modules.bulk(...n)}function te(...n){return window.enmity.modules.getByProps(...n)}window.enmity.modules.common;function ne(n,a,l){return window.enmity.utilities.findInReactTree(n,a,l)}function oe(n){return window.enmity.patcher.create(n)}var le="AccountInfo",j="1.6.85",ae="Shows Account Information and Account Assets.",U="development",ie=[{name:"acquite",id:"581573474296791211"}],re="#ff1f84",ce={name:le,version:j,description:ae,release:U,authors:ie,color:re};const[me,se]=M(p.byProps("transitionToGuild"),p.byProps("setString"));var ue=({settings:n})=>{const a=i("ic_selection_checked_24px"),l=V.createThemedStyleSheet({icon:{color:S.ThemeColorMap.INTERACTIVE_NORMAL}});return e.createElement(e.Fragment,null,e.createElement(Q,null,e.createElement(R,{title:"Enable Account Date Information"},e.createElement(o,{label:"Time of Creation",subLabel:"Show when an account was Created",leading:e.createElement(o.Icon,{style:l.icon,source:i("ic_header_members_add_24px")}),trailing:e.createElement(T,{value:n.getBoolean("createBtn",!0),onValueChange:()=>{n.toggle("createBtn",!0),u.open({content:`Successfully ${n.getBoolean("createBtn",!0)?"enabled":"disabled"} time of Account Creation.`,source:a})}})}),e.createElement(E,null),e.createElement(o,{label:"Time of Joining Server",subLabel:"Show when an account joined a server",leading:e.createElement(o.Icon,{style:l.icon,source:i("ic_leave_24px")}),trailing:e.createElement(T,{value:n.getBoolean("joinBtn",!0),onValueChange:()=>{n.toggle("joinBtn",!0),u.open({content:`Successfully ${n.getBoolean("joinBtn",!0)?"enabled":"disabled"} time of Joining Server.`,source:a})}})})),e.createElement(E,null),e.createElement(R,{title:"Enable Dedicated Buttons"},e.createElement(o,{label:"Profile Picture",subLabel:"Show dedicated button to view a user's PFP.",leading:e.createElement(o.Icon,{style:l.icon,source:i("img_nitro_profile_banner")}),trailing:e.createElement(T,{value:n.getBoolean("pfpBtn",!1),onValueChange:()=>{n.toggle("pfpBtn",!1),u.open({content:`Successfully ${n.getBoolean("pfpBtn",!1)?"enabled":"disabled"} dedicated PFP Button.`,source:a})}})}),e.createElement(E,null),e.createElement(o,{label:"Status",subLabel:"Show dedicated button to copy a user's Status",leading:e.createElement(o.Icon,{style:l.icon,source:i("ic_passport_24px")}),trailing:e.createElement(T,{value:n.getBoolean("statusBtn",!1),onValueChange:()=>{n.toggle("statusBtn",!1),u.open({content:`Successfully ${n.getBoolean("statusBtn",!1)?"enabled":"disabled"} dedicated Status Button.`,source:a})}})})),e.createElement(E,null),e.createElement(R,{title:"Disable Entire Plugin"},e.createElement(o,{label:"Disable Plugin",leading:e.createElement(o.Icon,{style:l.icon,source:i("ic_rulebook_16px")}),trailing:e.createElement(T,{value:n.getBoolean("masterDisable",!1),onValueChange:()=>{n.toggle("masterDisable",!1),u.open({content:`Successfully ${n.getBoolean("masterDisable",!1)?"disabled":"enabled"} AccountInfo.`,source:a})}})})),e.createElement(E,null),e.createElement(R,{title:"Source Code"},e.createElement(o,{label:"Download",subLabel:"Copy the link of the plugin to Clipboard.",leading:e.createElement(o.Icon,{style:l.icon,source:i("toast_copy_link")}),trailing:o.Arrow,onPress:()=>{se.setString("https://raw.githubusercontent.com/acquitelol/account-info/main/dist/AccountInfo.js"),u.open({content:"Copied to clipboard",source:i("pending-alert")})}}),e.createElement(o,{label:"Source",subLabel:"Open the Repo of the Plugin Externally",leading:e.createElement(o.Icon,{style:l.icon,source:i("ic_leave_stage")}),trailing:o.Arrow,onPress:()=>{me.openURL("https://github.com/acquitelol/account-info")}})),e.createElement(o,{label:`Plugin Version: ${j}
Release Channel: ${U}`})))};function h(n,a,l){return window.enmity.settings.getBoolean(n,a,l)}const[O,de,ge,G,H,pe]=M(p.byDisplayName("UserProfileHeader",!1),p.byProps("getMember"),p.byProps("getGuild"),p.byProps("transitionToGuild"),p.byProps("setString"),p.byName("HeaderAvatar",!1)),C=oe("account-info"),we=te("getStatus","getState"),ye={...ce,onStart(){C.instead(O,"default",(a,l,s)=>{var w,d,c,y;let b=h("AccountInfo","pfpBtn",!1),v=h("AccountInfo","statusBtn",!1),g=h("AccountInfo","createBtn",!0),A=h("AccountInfo","joinBtn",!0),Y=h("AccountInfo","masterDisable",!1);const[{user:r,channel:_,type:q}]=l;if(q!==0)return s.apply(a,l);const m=V.createThemedStyleSheet({container:{marginLeft:15.5,marginRight:15.5,marginTop:17.5},header:{color:S.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontFamily:S.Fonts.DISPLAY_BOLD,textTransform:"uppercase",fontSize:12.75,letterSpacing:.25},information:{borderRadius:4,backgroundColor:S.ThemeColorMap.BACKGROUND_TERTIARY,marginTop:10,marginBottom:10},item:{color:S.ThemeColorMap.TEXT_MUTED},icon:{color:S.ThemeColorMap.INTERACTIVE_NORMAL}}),z=i("img_nitro_profile_banner"),J=i("pending-alert"),K=i("toast_copy_link"),N=i("ic_header_members_add_24px"),x=i("ic_leave_24px"),B=_==null?void 0:_.guild_id,f=B&&de.getMember(_.guild_id,r.id),$=B&&ge.getGuild(_.guild_id),I=B?((w=f==null?void 0:f.getAvatarURL)==null?void 0:w.call(f,!1,4096,!0))||((d=r==null?void 0:r.getAvatarURL)==null?void 0:d.call(r,!1,4096,!0)):(c=r==null?void 0:r.getAvatarURL)==null?void 0:c.call(r,!1,4096,!0);if(!I)return s.apply(a,l);const W=r.discriminator%5,X=typeof I=="number"?`https://cdn.discordapp.com/embed/avatars/${W}.png`:I==null?void 0:I.replace(".webp",".png"),F=we.getActivities(r.id).find(Z=>Z.type===4);return Y?e.createElement(e.Fragment,null,s.apply(a,l)):e.createElement(e.Fragment,null,s.apply(a,l),e.createElement(D,{style:m.container},g||A?e.createElement(e.Fragment,null,e.createElement(L,{style:m.header},"Account Information"),e.createElement(D,{style:m.information},g&&e.createElement(e.Fragment,null,e.createElement(o,{label:"Created",leading:e.createElement(o.Icon,{style:m.icon,source:N}),onPress:()=>{u.open({content:P(r.createdAt).format("LLL"),source:N})},trailing:()=>e.createElement(L,{style:m.item},P(r.createdAt).fromNow())})),g&&A&&B&&f&&e.createElement(E,null),A&&B&&f&&e.createElement(e.Fragment,null,e.createElement(o,{label:`Joined ${(y=$==null?void 0:$.name)!=null?y:""}`,leading:e.createElement(o.Icon,{style:m.icon,source:x}),onPress:()=>{u.open({content:P(f.joinedAt).format("LLL"),source:x})},trailing:()=>e.createElement(L,{style:m.item},P(f.joinedAt).fromNow())})))):e.createElement(e.Fragment,null),b||v?e.createElement(e.Fragment,null,e.createElement(L,{style:m.header},"Account Assets"),e.createElement(D,{style:m.information},b&&e.createElement(o,{label:`View ${r.username}'s Profile Picture`,leading:e.createElement(o.Icon,{style:m.icon,source:z}),trailing:o.Arrow,onPress:()=>{G.openURL(X)}}),b&&v&&e.createElement(E,null),F&&v&&e.createElement(e.Fragment,null,e.createElement(o,{label:`Copy ${r.username}'s Status`,leading:e.createElement(o.Icon,{style:m.icon,source:K}),trailing:o.Arrow,onPress:()=>{H.setString(`${F.emoji.name?`:${F.emoji.name}:`:""} ${F.state?F.state:""}`),u.open({content:"Copied to clipboard",source:J})}})))):e.createElement(e.Fragment,null)))}),C.after(pe,"default",(a,[{user:l}],s)=>{var w;let d=h("AccountInfo","pfpBtn",!1);const c=(w=l==null?void 0:l.getAvatarURL)==null?void 0:w.call(l,!1,4096,!0);if(!c)return s;const y=l.discriminator%5,b=typeof c=="number"?`https://cdn.discordapp.com/embed/avatars/${y}.png`:c==null?void 0:c.replace(".webp",".png");return d?e.createElement(e.Fragment,null,s):e.createElement(k,{onPress:()=>G.openURL(b)},s)});const n=C.after(O,"default",(a,l,s)=>{const w=ne(s,d=>{var c;return(c=d==null?void 0:d.props)==null?void 0:c.customStatusActivity});C.after(w,"type",(d,c,y)=>{let b=h("AccountInfo","statusBtn",!1);const v=i("pending-alert"),g=c[0].find(A=>A.type===4);return b?e.createElement(e.Fragment,null,y):e.createElement(e.Fragment,null,e.createElement(k,{onPress:()=>{H.setString(`${g.emoji.name?`:${g.emoji.name}:`:""} ${g.state?g.state:""}`),u.open({content:"Copied to clipboard",source:v})}},y))}),n()})},onStop(){C.unpatchAll()},getSettingsPanel({settings:n}){return e.createElement(ue,{settings:n})}};ee(ye);
