var myModel = `
    <InsightMakerModel>
  <root>
    <mxCell id="0" />
    <mxCell id="1" parent="0" />
    <Setting Note="" Version="36" TimeLength="20" TimeStart="0" TimeStep="1" TimeUnits="Weeks" StrictUnits="true" StrictLinks="true" StrictAgentResolution="true" Units="" HiddenUIGroups="Validation,User Interface" SolutionAlgorithm="RK1" BackgroundColor="white" Throttle="1" Macros="" SensitivityPrimitives="" SensitivityRuns="50" SensitivityBounds="50, 80, 95, 100" SensitivityShowRuns="false" article="{&quot;comments&quot;:true, &quot;facebookUID&quot;: &quot;&quot;}" StyleSheet="{}" id="2">
      <mxCell parent="1" vertex="1" visible="0">
        <mxGeometry x="20" y="20" width="80" height="40" as="geometry" />
      </mxCell>
    </Setting>
    <Display name="Default Display" Note="" Type="Time Series" xAxis="Time (%u)" yAxis="%o" ThreeDimensional="false" Primitives="55,58,64,67,59" AutoAddPrimitives="true" ScatterplotOrder="X Primitive, Y Primitive" Image="Display" yAxis2="" Primitives2="" showMarkers="false" showLines="true" showArea="false" legendPosition="None" id="3">
      <mxCell style="roundImage;image=/builder/images/DisplayFull.png;" parent="1" vertex="1" visible="0">
        <mxGeometry x="50" y="20" width="64" height="64" as="geometry" />
      </mxCell>
    </Display>
    <Stock name="Technology" Note="" InitialValue="10" StockMode="Store" Delay="10" Volume="100" NonNegative="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" id="55">
      <mxCell style="stock" parent="1" vertex="1">
        <mxGeometry x="530" y="210" width="100" height="40" as="geometry" />
      </mxCell>
    </Stock>
    <Flow name="Technology obsolesence" Note="" FlowRate="[Technology]/[Obsolescense time]" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" id="56">
      <mxCell style="flow" parent="1" source="55" edge="1">
        <mxGeometry x="-30" y="-30" width="100" height="100" as="geometry">
          <mxPoint x="-30" y="70" as="sourcePoint" />
          <mxPoint x="790" y="230" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Flow name="Technolgoy improvement" Note="" FlowRate="([Detection investment]+[Information security investment])/[Technology cost]" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" id="57">
      <mxCell style="flow" parent="1" target="55" edge="1">
        <mxGeometry x="-30" y="-30" width="100" height="100" as="geometry">
          <mxPoint x="370" y="230" as="sourcePoint" />
          <mxPoint x="-30" y="70" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Stock name="Total Vulnerabilities" Note="" InitialValue="20" StockMode="Store" Delay="10" Volume="100" NonNegative="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" id="58">
      <mxCell style="stock" parent="1" vertex="1">
        <mxGeometry x="280" y="700" width="100" height="40" as="geometry" />
      </mxCell>
    </Stock>
    <Stock name="Discovered Vulnerabilities" Note="" InitialValue="200" StockMode="Store" Delay="10" Volume="100" NonNegative="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" id="59">
      <mxCell style="stock" parent="1" vertex="1">
        <mxGeometry x="530" y="700" width="100" height="40" as="geometry" />
      </mxCell>
    </Stock>
    <Flow name="Discovery ratio" Note="" FlowRate="([Threat and Vulnerability management investment]+[Information sharing investment])/[Technology]" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" id="60">
      <mxCell style="flow" parent="1" source="58" target="59" edge="1">
        <mxGeometry x="-50" y="270" width="100" height="100" as="geometry">
          <mxPoint x="-50" y="370" as="sourcePoint" />
          <mxPoint x="50" y="270" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Flow name="Patching ratio" Note="" FlowRate="([Discovered Vulnerabilities]*0.6)/[Technology]" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" id="61">
      <mxCell style="flow" parent="1" source="59" edge="1">
        <mxGeometry x="-50" y="270" width="100" height="100" as="geometry">
          <mxPoint x="-50" y="370" as="sourcePoint" />
          <mxPoint x="790" y="720" as="targetPoint" />
          <Array as="points" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Flow name="New vulnerabilities" Note="" FlowRate="10" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" id="63">
      <mxCell style="flow" parent="1" target="58" edge="1">
        <mxGeometry x="-40" y="272.5" width="100" height="100" as="geometry">
          <mxPoint x="110" y="722.5" as="sourcePoint" />
          <mxPoint x="-40" y="372.5" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Stock name="Training" Note="" InitialValue="5" StockMode="Store" Delay="10" Volume="100" NonNegative="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" id="64">
      <mxCell style="stock" parent="1" vertex="1">
        <mxGeometry x="1530" y="250" width="100" height="40" as="geometry" />
      </mxCell>
    </Stock>
    <Flow name="Training loss" Note="" FlowRate="[Training]/[Training forgetting time]" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" id="65">
      <mxCell style="flow" parent="1" source="64" edge="1">
        <mxGeometry x="260" y="-30" width="100" height="100" as="geometry">
          <mxPoint x="260" y="70" as="sourcePoint" />
          <mxPoint x="1780" y="270" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Flow name="Training increase" Note="" FlowRate="([Training investment]/[Training cost per hour])*[Training effectiveness]" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" id="66">
      <mxCell style="flow" parent="1" target="64" edge="1">
        <mxGeometry x="260" y="-30" width="100" height="100" as="geometry">
          <mxPoint x="1370" y="270" as="sourcePoint" />
          <mxPoint x="260" y="70" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Stock name="Impact" Note="" InitialValue="100" StockMode="Store" Delay="10" Volume="100" NonNegative="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" id="67">
      <mxCell style="stock" parent="1" vertex="1">
        <mxGeometry x="1480" y="530" width="100" height="40" as="geometry" />
      </mxCell>
    </Stock>
    <Flow name="Impact mitigation" Note="" FlowRate="(((([Information sharing investment]/[Average recovery time])+([Business continuity management investment]/[Response time]))/8000)*([Training effectiveness]+Smooth([Impact], 50))/10)" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" id="68">
      <mxCell style="flow" parent="1" source="67" edge="1">
        <mxGeometry x="260" y="-30" width="100" height="100" as="geometry">
          <mxPoint x="260" y="70" as="sourcePoint" />
          <mxPoint x="1750" y="550" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Flow name="Impact increase" Note="" FlowRate="[Detections effect]*[Incident prevention]" OnlyPositive="true" TimeIndependent="false" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" id="69">
      <mxCell style="flow" parent="1" target="67" edge="1">
        <mxGeometry x="260" y="-30" width="100" height="100" as="geometry">
          <mxPoint x="1300" y="550" as="sourcePoint" />
          <mxPoint x="260" y="70" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Flow>
    <Variable name="Information security investment" Note="" Equation="6000" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="70" id="70">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="310" y="20" width="150" height="70" as="geometry" />
      </mxCell>
    </Variable>
    <Variable name="Threat and Vulnerability management investment" Note="" Equation="9000" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="71" id="71">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="530" y="840" width="150" height="90" as="geometry" />
      </mxCell>
    </Variable>
    <Variable name="Incident prevention" Note="" Equation="(([Training investment]+[Information security investment])/[Detections])*[Lessons learned]" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="72" id="72">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="1020" width="150" height="70" as="geometry" />
      </mxCell>
    </Variable>
    <Variable name="Detection investment" Note="" Equation="7000" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="73" id="73">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="270" y="450" width="150" height="70" as="geometry" />
      </mxCell>
    </Variable>
    <Variable name="Business continuity management investment" Note="" Equation="0" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="74" id="74">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="1720" y="420" width="150" height="70" as="geometry" />
      </mxCell>
    </Variable>
    <Variable name="Training investment" Note="" Equation="6000" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="75" id="75">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="1190" y="190" width="150" height="70" as="geometry" />
      </mxCell>
    </Variable>
    <Variable name="Training cost per hour" Note="" Equation="100" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="76" id="76">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="1240" y="100" width="150" height="70" as="geometry" />
      </mxCell>
    </Variable>
    <Variable name="Training forgetting time" Note="" Equation="12" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="77" id="77">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="1710" y="80" width="150" height="70" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" oldId="80" id="80">
      <mxCell style="link" parent="1" source="77" target="65" edge="1">
        <mxGeometry x="245" y="-37.33" width="100" height="100" as="geometry">
          <mxPoint x="245" y="62.67" as="sourcePoint" />
          <mxPoint x="1695" y="202.67" as="targetPoint" />
          <Array as="points">
            <mxPoint x="1710" y="210" />
          </Array>
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" id="82">
      <mxCell style="link" parent="1" source="76" target="66" edge="1">
        <mxGeometry x="260" y="-30" width="100" height="100" as="geometry">
          <mxPoint x="260" y="70" as="sourcePoint" />
          <mxPoint x="360" y="-30" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" id="83">
      <mxCell style="link" parent="1" source="75" target="66" edge="1">
        <mxGeometry x="260" y="-30" width="100" height="100" as="geometry">
          <mxPoint x="260" y="70" as="sourcePoint" />
          <mxPoint x="360" y="-30" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" id="85">
      <mxCell style="link" parent="1" source="64" target="68" edge="1">
        <mxGeometry x="260" y="-30" width="100" height="100" as="geometry">
          <mxPoint x="260" y="70" as="sourcePoint" />
          <mxPoint x="360" y="-30" as="targetPoint" />
          <Array as="points" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" id="88">
      <mxCell style="link" parent="1" source="75" target="72" edge="1">
        <mxGeometry width="100" height="100" as="geometry">
          <mxPoint y="100" as="sourcePoint" />
          <mxPoint x="100" as="targetPoint" />
          <Array as="points" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Converter name="Training effectiveness" Note="" Source="64" Data="0,1; 10,1; 20,0.85; 35,0.65; 50,0.58; 85,0.5; 100,0.5" Interpolation="Linear" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" id="90">
      <mxCell style="converter" parent="1" vertex="1">
        <mxGeometry x="1460" y="390" width="120" height="50" as="geometry" />
      </mxCell>
    </Converter>
    <Link name="Link" Note="" BiDirectional="false" id="91">
      <mxCell style="link" parent="1" source="90" target="66" edge="1">
        <mxGeometry x="260" y="-30" width="100" height="100" as="geometry">
          <mxPoint x="260" y="70" as="sourcePoint" />
          <mxPoint x="360" y="-30" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" id="92">
      <mxCell style="link" parent="1" source="90" target="68" edge="1">
        <mxGeometry x="260" y="-30" width="100" height="100" as="geometry">
          <mxPoint x="260" y="70" as="sourcePoint" />
          <mxPoint x="360" y="-30" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" id="93">
      <mxCell style="link" parent="1" source="64" target="90" edge="1">
        <mxGeometry x="260" y="-30" width="100" height="100" as="geometry">
          <mxPoint x="260" y="70" as="sourcePoint" />
          <mxPoint x="360" y="-30" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Variable name="Response time" Note="" Equation="0.9" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" id="94">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="1690" y="760" width="120" height="50" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" id="95">
      <mxCell style="link" parent="1" source="94" target="68" edge="1">
        <mxGeometry x="260" y="-30" width="100" height="100" as="geometry">
          <mxPoint x="260" y="70" as="sourcePoint" />
          <mxPoint x="360" y="-30" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Variable name="Average recovery time" Note="" Equation="180" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" id="97">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="1780" y="650" width="120" height="50" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" id="98">
      <mxCell style="link" parent="1" source="97" target="68" edge="1">
        <mxGeometry x="260" y="-30" width="100" height="100" as="geometry">
          <mxPoint x="260" y="70" as="sourcePoint" />
          <mxPoint x="360" y="-30" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" id="99">
      <mxCell style="link" parent="1" source="74" target="68" edge="1">
        <mxGeometry x="260" y="-30" width="100" height="100" as="geometry">
          <mxPoint x="260" y="70" as="sourcePoint" />
          <mxPoint x="360" y="-30" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Converter name="Detections effect" Note="" Source="104" Data="15,1; 25,0.2; 40,0.3; 70,0.4; 120,0.5; 150,0.6; 200,0.65; 225,0.8; 260,0.85; 310,0.9; 375,0.95" Interpolation="Linear" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" id="101">
      <mxCell style="converter" parent="1" vertex="1">
        <mxGeometry x="1190" y="650" width="120" height="50" as="geometry" />
      </mxCell>
    </Converter>
    <Link name="Link" Note="" BiDirectional="false" id="102">
      <mxCell style="link" parent="1" source="101" target="69" edge="1">
        <mxGeometry x="260" y="-30" width="100" height="100" as="geometry">
          <mxPoint x="260" y="70" as="sourcePoint" />
          <mxPoint x="360" y="-30" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Variable name="Detections" Note="" Equation="[Detection investment]" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" id="104">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="840" y="650" width="120" height="50" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" id="105">
      <mxCell style="link" parent="1" source="73" target="104" edge="1">
        <mxGeometry x="260" y="-30" width="100" height="100" as="geometry">
          <mxPoint x="260" y="70" as="sourcePoint" />
          <mxPoint x="360" y="-30" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" id="106">
      <mxCell style="link" parent="1" source="104" target="101" edge="1">
        <mxGeometry x="260" y="-30" width="100" height="100" as="geometry">
          <mxPoint x="260" y="70" as="sourcePoint" />
          <mxPoint x="360" y="-30" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" id="107">
      <mxCell style="link" parent="1" source="104" target="72" edge="1">
        <mxGeometry x="260" y="-30" width="100" height="100" as="geometry">
          <mxPoint x="260" y="70" as="sourcePoint" />
          <mxPoint x="360" y="-30" as="targetPoint" />
          <Array as="points">
            <mxPoint x="990" y="330" />
          </Array>
        </mxGeometry>
      </mxCell>
    </Link>
    <Variable name="Information sharing investment" Note="" Equation="6000" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" id="108">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="1145" y="800" width="120" height="70" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" id="119">
      <mxCell style="link" parent="1" source="73" target="57" edge="1">
        <mxGeometry width="100" height="100" as="geometry">
          <mxPoint y="100" as="sourcePoint" />
          <mxPoint x="100" as="targetPoint" />
          <Array as="points" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" id="120">
      <mxCell style="link" parent="1" source="70" target="72" edge="1">
        <mxGeometry width="100" height="100" as="geometry">
          <mxPoint y="100" as="sourcePoint" />
          <mxPoint x="100" as="targetPoint" />
          <Array as="points" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" id="121">
      <mxCell style="link" parent="1" source="70" target="57" edge="1">
        <mxGeometry width="100" height="100" as="geometry">
          <mxPoint y="100" as="sourcePoint" />
          <mxPoint x="100" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Variable name="Technology cost" Note="" Equation="200" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" oldId="122" id="122">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="120" y="130" width="150" height="70" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" id="123">
      <mxCell style="link" parent="1" source="122" target="57" edge="1">
        <mxGeometry width="100" height="100" as="geometry">
          <mxPoint y="100" as="sourcePoint" />
          <mxPoint x="100" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Variable name="Obsolescense time" Note="" Equation="104" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" id="125">
      <mxCell style="variable" parent="1" vertex="1">
        <mxGeometry x="800" y="260" width="120" height="50" as="geometry" />
      </mxCell>
    </Variable>
    <Link name="Link" Note="" BiDirectional="false" id="126">
      <mxCell style="link" parent="1" source="125" target="56" edge="1">
        <mxGeometry width="100" height="100" as="geometry">
          <mxPoint y="100" as="sourcePoint" />
          <mxPoint x="100" as="targetPoint" />
          <Array as="points">
            <mxPoint x="750" y="310" />
          </Array>
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" id="127">
      <mxCell style="link" parent="1" source="55" target="61" edge="1">
        <mxGeometry width="100" height="100" as="geometry">
          <mxPoint y="100" as="sourcePoint" />
          <mxPoint x="100" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" id="129">
      <mxCell style="link" parent="1" source="55" target="60" edge="1">
        <mxGeometry width="100" height="100" as="geometry">
          <mxPoint y="100" as="sourcePoint" />
          <mxPoint x="100" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" id="130">
      <mxCell style="link" parent="1" source="71" target="60" edge="1">
        <mxGeometry x="-20" y="300" width="100" height="100" as="geometry">
          <mxPoint x="-20" y="400" as="sourcePoint" />
          <mxPoint x="80" y="300" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" id="131">
      <mxCell style="link" parent="1" source="108" target="60" edge="1">
        <mxGeometry width="100" height="100" as="geometry">
          <mxPoint y="100" as="sourcePoint" />
          <mxPoint x="100" as="targetPoint" />
          <Array as="points">
            <mxPoint x="580" y="840" />
          </Array>
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" id="132">
      <mxCell style="link" parent="1" source="108" target="68" edge="1">
        <mxGeometry width="100" height="100" as="geometry">
          <mxPoint y="100" as="sourcePoint" />
          <mxPoint x="100" as="targetPoint" />
          <Array as="points">
            <mxPoint x="1560" y="770" />
          </Array>
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" id="133">
      <mxCell style="link" parent="1" source="72" target="69" edge="1">
        <mxGeometry width="100" height="100" as="geometry">
          <mxPoint y="100" as="sourcePoint" />
          <mxPoint x="100" as="targetPoint" />
          <Array as="points">
            <mxPoint x="1170" y="360" />
          </Array>
        </mxGeometry>
      </mxCell>
    </Link>
    <Link name="Link" Note="" BiDirectional="false" id="134">
      <mxCell style="link" parent="1" source="67" target="135" edge="1">
        <mxGeometry width="100" height="100" as="geometry">
          <mxPoint y="100" as="sourcePoint" />
          <mxPoint x="100" as="targetPoint" />
          <Array as="points" />
        </mxGeometry>
      </mxCell>
    </Link>
    <Converter name="Lessons learned" Note="" Source="67" Data="0,0; 25,0.15; 50,0.2; 75,0.25; 100,0.35; 125,0.4; 150,0.55; 200,0.7; 250,0.8; 300,0.95; 350,0.95" Interpolation="Linear" Units="Unitless" MaxConstraintUsed="false" MinConstraintUsed="false" MaxConstraint="100" MinConstraint="0" ShowSlider="false" SliderMax="100" SliderMin="0" SliderStep="" Image="None" FlipHorizontal="false" FlipVertical="false" LabelPosition="Middle" id="135">
      <mxCell style="converter" parent="1" vertex="1">
        <mxGeometry x="1060" y="350" width="120" height="50" as="geometry" />
      </mxCell>
    </Converter>
    <Link name="Link" Note="" BiDirectional="false" id="136">
      <mxCell style="link" parent="1" source="135" target="72" edge="1">
        <mxGeometry width="100" height="100" as="geometry">
          <mxPoint y="100" as="sourcePoint" />
          <mxPoint x="100" as="targetPoint" />
        </mxGeometry>
      </mxCell>
    </Link>
  </root>
</InsightMakerModel>`;

window.myModel = myModel;

//exports.myModel = myModel;