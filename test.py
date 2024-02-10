import streamlit  as st
from stable_diffusion_ps_pea_component import stable_diffusion_ps_pea
st.set_page_config(layout="wide")
st.title("Streamlit Stable diffusion PS")
col1, col2 = st.columns(2)
with col1:
    stable_diffusion_ps_pea()