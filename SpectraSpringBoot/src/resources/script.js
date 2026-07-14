// ============================================================
// COLOR SERVICE (from ColorService.js — expanded)
// ============================================================

// 500+ color database — NTC + Portuguese/Brazilian paint names
const COLOR_DB = [
  ["000000", "Preto"], ["000080", "Azul Marinho"], ["00008B", "Azul Escuro"],
  ["0000CD", "Azul Médio"], ["0000FF", "Azul Puro"], ["000E0E", "Preto Musgo"],
  ["001440", "Azul Meia-Noite"], ["002147", "Azul Oxford"], ["003153", "Azul Prussiano"],
  ["003366", "Azul Navy Escuro"], ["004040", "Verde-Azul Floresta"], ["004953", "Verde Azul Escuro"],
  ["006400", "Verde Floresta"], ["006600", "Verde Campo"], ["006B3C", "Verde Britânico"],
  ["006994", "Azul Cerúleo"], ["007AA5", "Azul Pacífico"], ["007FFF", "Azure"],
  ["008000", "Verde"], ["008080", "Verde-Azulado"], ["008B8B", "Ciano Escuro"],
  ["009B77", "Verde Esmeralda"], ["00A693", "Turquesa Verde"], ["00AA00", "Verde Puro"],
  ["00B5E2", "Azul Capri"], ["00BFFF", "Azul Céu Profundo"], ["00CED1", "Turquesa Escuro"],
  ["00D7D7", "Azul Robim"], ["00E5EE", "Turquesa Médio Claro"], ["00FA9A", "Aquamarine Médio"],
  ["00FF00", "Lima"], ["00FF7F", "Verde Primavera"], ["00FFFF", "Ciano"],
  ["010B13", "Preto Quase"], ["012169", "Azul Nacional"], ["013220", "Verde Selva"],
  ["01796F", "Pinho"], ["01A368", "Verde Crayola"], ["01796F", "Verde Teal Escuro"],
  ["02402A", "Verde Inglês"], ["036A52", "Verde Jade Escuro"], ["055C59", "Verde Petróleo"],
  ["065535", "Verde Evergreen"], ["08457E", "Azul Índigo Escuro"], ["08E8DE", "Turquesa Radiante"],
  ["0D1117", "Preto Grafite"], ["0D98BA", "Azul Piscina"], ["0E3386", "Azul Cobalto Escuro"],
  ["0F4D92", "Azul Yale"], ["0FC0FC", "Azul Elétrico"], ["1164B4", "Azul Lápis"],
  ["1560BD", "Azul Dodger Escuro"], ["17806D", "Verde Viridian Escuro"], ["17A589", "Verde Água"],
  ["18294A", "Azul Marinho Escuro"], ["1A1A1A", "Cinza Quase Preto"], ["1A2421", "Preto Verde"],
  ["1A4B6B", "Azul Oceano"], ["1B1212", "Preto Avermelhado"], ["1C1C1C", "Cinza Carvão"],
  ["1D2951", "Azul Meia Noite Escuro"], ["1E90FF", "Azul Dodger"], ["1F305E", "Azul Espacial"],
  ["1F75FE", "Azul Crayola"], ["20B2AA", "Verde-Mar Claro"], ["212121", "Grafite Escuro"],
  ["215E21", "Verde Musgo Escuro"], ["21421E", "Verde Floresta Escuro"], ["2266AA", "Azul Aço Vivo"],
  ["228B22", "Verde Floresta Médio"], ["232B2B", "Preto Charleston"], ["23395B", "Azul Escuro Índigo"],
  ["236B8E", "Azul Ardósia"], ["24387F", "Azul Índigo Médio"], ["2554C7", "Azul Cobalto Puro"],
  ["26619C", "Lazuli"], ["268B2C", "Verde Feto"], ["28282B", "Cinza Quase Preto"],
  ["28AE7B", "Verde Malachite"], ["2D5A27", "Verde Oliva Escuro"], ["2E2D88", "Azul Índigo"],
  ["2E8B57", "Verde-Mar"], ["2F4F4F", "Cinza Ardósia Escuro"], ["2F6A2F", "Verde Pinheiro"],
  ["302633", "Roxo Escuro"], ["317873", "Verde Cerceta Escuro"], ["32CD32", "Verde Lima"],
  ["35274A", "Roxo Noite"], ["355E3B", "Verde Caçador"], ["36454F", "Cinza Carvão Azul"],
  ["3B0000", "Vinho Escuro Profundo"], ["3C0000", "Marrom Escuro Profundo"], ["3CB371", "Verde Médio Mar"],
  ["3D0C02", "Marrom Mogno"], ["3D9140", "Verde Clorofila"], ["3EB489", "Verde Menta"],
  ["3F4E6E", "Azul Aço Escuro"], ["404040", "Cinza Médio Escuro"], ["40826D", "Verde Viridian"],
  ["4166F5", "Azul Ultra"], ["41B3A3", "Verde Água Médio"], ["424242", "Cinza Grafite"],
  ["4169E1", "Azul Royal"], ["41AA58", "Verde Vivo"], ["4444FF", "Azul Vivo Médio"],
  ["44D7A8", "Verde Turquesa Médio"], ["454B1B", "Verde Oliva Seco"], ["45B08C", "Verde Jade"],
  ["465C47", "Verde Floresta Escuro Frio"], ["467C39", "Verde Exército"], ["469B4D", "Verde Erva"],
  ["46524A", "Cinza Verde Escuro"], ["4682B4", "Azul Aço"], ["483D8B", "Azul Ardósia Escuro"],
  ["48D1CC", "Turquesa Médio"], ["496B7C", "Azul Petróleo"], ["4B0082", "Índigo"],
  ["4B5320", "Verde Oliva Escuro Militar"], ["4C1B1B", "Marrom Chocolate Escuro"],
  ["4D4F54", "Cinza Prata Escuro"], ["4D5D53", "Cinza Verde Militar"], ["4D96FF", "Azul Claro Vivo"],
  ["4E1609", "Marrom Escuro Quente"], ["4E6B3B", "Verde Musgo"], ["4F7942", "Verde Feto Médio"],
  ["506A51", "Verde Sálvia Escuro"], ["517E95", "Azul Ardósia Médio"], ["52B2BF", "Azul Cerúleo Médio"],
  ["536878", "Azul Granito"], ["53868B", "Azul Cadet Médio"], ["556B2F", "Verde Oliva Escuro"],
  ["563C0D", "Marrom Castanha"], ["566D7E", "Azul Pedra"], ["5680E9", "Azul Lavanda Médio"],
  ["568203", "Verde Abacate"], ["5882BE", "Azul Cornflower Médio"], ["58A4B0", "Azul Aço Claro Médio"],
  ["59260B", "Marrom Conhaque"], ["5B92A8", "Azul Pizarra"], ["5C3317", "Marrom Escuro"],
  ["5D0B00", "Marrom Mogno Escuro"], ["5F0F40", "Roxo Borgonha"], ["5F4F37", "Marrom Bege"],
  ["5F9EA0", "Azul Cadet"], ["5FA778", "Verde Menta Escuro"], ["607D8B", "Azul Cinza"],
  ["618685", "Cinza Verde Água"], ["619B8A", "Verde Menta Suave"], ["61B15A", "Verde Lima Médio"],
  ["625D5D", "Cinza Quente Escuro"], ["6282AC", "Azul Aciano Escuro"], ["63452C", "Marrom Siena"],
  ["6495ED", "Azul Cornflower"], ["663399", "Rebeca Purple"], ["665D1E", "Ocre Escuro"],
  ["66CDAA", "Aquamarine Médio"], ["6699CC", "Azul Polvos"], ["67522C", "Marrom Trigo"],
  ["676767", "Cinza Neutro"], ["676B4B", "Verde Oliva Suave"], ["686C5E", "Cinza Verde"],
  ["696969", "Cinza Dindo"], ["69B3A2", "Verde Água Pastel"], ["6A5ACD", "Ardósia Azul"],
  ["6A7C64", "Cinza Verde Claro"], ["6A9153", "Verde Maçã Escuro"], ["6B0000", "Vermelho Escuro Sangue"],
  ["6B238E", "Roxo Escuro Médio"], ["6B2C2C", "Marrom Sangue"], ["6B3FA0", "Roxo Médio"],
  ["6B4226", "Marrom Café"], ["6B4D2C", "Marrom Canela"], ["6B6B6B", "Cinza Médio"],
  ["6B8E23", "Verde Oliva"], ["6C3082", "Roxo Ametista"], ["6C541E", "Marrom Ocre"],
  ["6CB4E4", "Azul Gelo"], ["6D1F7C", "Roxo Escuro"], ["6E0902", "Marrom Vermelho"],
  ["6F4E37", "Café"], ["6F6F6F", "Cinza Carbono"], ["7060AB", "Lilás Médio"],
  ["708090", "Cinza Ardósia"], ["71BC78", "Verde Pastel Médio"], ["72A48B", "Verde Sálvia Médio"],
  ["722F37", "Vinho Tinto"], ["728FCE", "Azul Lilás"], ["72917B", "Cinza Verde Suave"],
  ["738276", "Cinza Verde Frio"], ["744700", "Marrom Quente"], ["748B5B", "Verde Exército Claro"],
  ["754F2E", "Marrom Terra"], ["756D60", "Bege Escuro"], ["75878A", "Azul Cinza Suave"],
  ["76528A", "Ametista Escuro"], ["78866B", "Cinza Verde Azeitona"], ["7936DB", "Roxo Médio Vivo"],
  ["79443B", "Marrom Avermelhado"], ["79A7D3", "Azul Suave"], ["79C753", "Verde Maçã"],
  ["7B3F00", "Chocolate Escuro"], ["7B68EE", "Azul Ardósia Médio"], ["7C4848", "Marrom Rosado"],
  ["7CFC00", "Verde Gramado"], ["7D1B7E", "Roxo Escuro Vivo"], ["7E5109", "Marrom Âmbar"],
  ["7F0000", "Marrom Escuro"], ["7F00FF", "Violeta Elétrico"], ["7FFF00", "Verde Chartreuse"],
  ["7FFFD4", "Aquamarine"], ["7FDBFF", "Azul Aqua"], ["800000", "Bordô"],
  ["800020", "Carmesim Escuro"], ["800080", "Roxo"], ["808000", "Oliva"],
  ["808080", "Cinza"], ["80471C", "Marrom Ferrugem"], ["814A19", "Marrom Siena Queimado"],
  ["826644", "Marrom Bronze Escuro"], ["836539", "Marrom Camelo"], ["838B83", "Cinza Verde Escuro"],
  ["848482", "Cinza Bebê Escuro"], ["84AE70", "Verde Pistache Escuro"], ["856088", "Lilás Roxo"],
  ["871F78", "Roxo Vivo"], ["872657", "Rosa Escuro"], ["878787", "Cinza Suave"],
  ["87413F", "Marrom Avermelhado Escuro"], ["87CEEB", "Azul Céu"], ["87CEFA", "Azul Céu Claro"],
  ["885818", "Marrom Âmbar Escuro"], ["891F0F", "Vermelho Tijolo Escuro"],
  ["8A2BE2", "Violeta Azul"], ["8A3B12", "Marrom Laranja Escuro"], ["8A4F7D", "Ameixa"],
  ["8A9A86", "Verde Sálvia"], ["8B0000", "Vermelho Escuro"], ["8B008B", "Magenta Escuro"],
  ["8B4513", "Marrom Sela"], ["8B5B2B", "Marrom Ocre Escuro"], ["8B668B", "Orquídea Escuro"],
  ["8C92AC", "Cinza Frio"], ["8E402A", "Marrom Enferrujado"], ["8F00FF", "Violeta"],
  ["8FBC8F", "Verde Mar Escuro"], ["90EE90", "Verde Claro"], ["9055A2", "Roxo Médio"],
  ["9370DB", "Roxo Médio"], ["9400D3", "Violeta Escuro"], ["946B2D", "Marrom Caramelo"],
  ["94D0C0", "Verde Água Claro"], ["95918C", "Cinza Rosado"], ["96DED1", "Turquesa Claro"],
  ["9932CC", "Orquídea Escuro"], ["98FB98", "Verde Pálido"], ["99590B", "Laranja Escuro Queimado"],
  ["997A8D", "Lilás Cinza"], ["99C5C4", "Azul Verde Claro"], ["9ACEEB", "Azul Pastel Claro"],
  ["9ACD32", "Verde Amarelo"], ["9B2335", "Carmesim"], ["9CAF88", "Verde Cinza Claro"],
  ["9DC183", "Verde Pistache"], ["9E1030", "Vermelho Rubi Escuro"], ["9F8170", "Bege Escuro"],
  ["A0522D", "Siena"], ["A0785A", "Marrom Pastel"], ["A08030", "Ocre Amarelo"],
  ["A09060", "Areia Escura"], ["A17249", "Marrom Terra Claro"], ["A1CAF1", "Azul Bebê"],
  ["A2A2A2", "Cinza Claro"], ["A3C1AD", "Verde Gelo"], ["A52A2A", "Marrom"],
  ["A67C52", "Marrom Café Claro"], ["A69B97", "Cinza Rosado Suave"], ["A6A6A6", "Prata Cinza"],
  ["A7C5BD", "Verde Água Suave"], ["A8516E", "Rosa Escuro"], ["A8A9AD", "Cinza Prata"],
  ["A9A9A9", "Cinza Escuro"], ["AA381E", "Vermelho Queimado"], ["AACCDD", "Azul Gelo Claro"],
  ["AAD5AA", "Verde Menta Pastel"], ["AADDCC", "Verde Água Pastel"], ["AB2524", "Vermelho Tijolo"],
  ["AB4B52", "Rosa Velho Escuro"], ["AC7C00", "Ocre Dourado"], ["AD6F3B", "Marrom Canela Claro"],
  ["ADD8E6", "Azul Claro"], ["ADFF2F", "Verde Amarelado"], ["AE0C00", "Vermelho Escarlate"],
  ["AF002A", "Carmesim Escuro"], ["AF4035", "Vermelho Paprika"], ["AFEEEE", "Turquesa Pálido"],
  ["B0C4DE", "Azul Aço Claro"], ["B0E0E6", "Azul Pó"], ["B14A0B", "Laranja Queimado Médio"],
  ["B17A4A", "Marrom Dourado"], ["B22222", "Tijolo Vermelho"], ["B28C4A", "Dourado Suave"],
  ["B2BEB5", "Cinza Prata Verde"], ["B2DADA", "Azul Verde Pastel"], ["B2DFDB", "Verde Água Claro"],
  ["B31B1B", "Vermelho Cornelia"], ["B38B6D", "Marrom Rosado Claro"], ["B48395", "Rosa Velho"],
  ["B5651D", "Ocre Tostado"], ["B5A642", "Ouro Velho"], ["B5B5B5", "Cinza Claro Neutro"],
  ["B6316C", "Rosa Escuro Fúcsia"], ["B6862D", "Dourado Queimado"], ["B87333", "Cobre"],
  ["B8860B", "Dourado Escuro"], ["B8CEC2", "Verde Pastel Frio"], ["B9975B", "Areia Quente Média"],
  ["BA55D3", "Orquídea Médio"], ["BB0000", "Vermelho Escuro"], ["BCA9A9", "Rosa Cinza"],
  ["BC8F8F", "Rosa Rosado"], ["BD7A2E", "Mostarda Escura"], ["BDB76B", "Caqui Escuro"],
  ["BE9A68", "Marrom Areia"], ["BF5700", "Laranja Queimado Escuro"], ["C0C0C0", "Prata"],
  ["C19A6B", "Caramelo"], ["C1BDB3", "Bege Frio"], ["C2B280", "Areia"],
  ["C2A477", "Areia Média"], ["C35817", "Laranja Ferrugem"], ["C39953", "Âmbar"],
  ["C46210", "Laranja Ardente"], ["C4AEAD", "Rosa Pastel"], ["C5B358", "Ouro Antigo"],
  ["C71585", "Violeta Vermelho Médio"], ["C80000", "Vermelho Puro Escuro"],
  ["C8A951", "Mostarda Suave"], ["C97D4E", "Terracota Suave"], ["C9A84C", "Ouro Médio"],
  ["CA6641", "Laranja Terracota"], ["CB410B", "Laranja Sanguíneo"], ["CB9D06", "Mel Escuro"],
  ["CC0000", "Vermelho Brilhante"], ["CC5500", "Laranja Queimado"], ["CC7722", "Ocre"],
  ["CC7800", "Ouro Laranja"], ["CCAC00", "Amarelo Dourado"], ["CCCCFF", "Periwinkle Claro"],
  ["CD5C5C", "Vermelho Indiano"], ["CD7F32", "Bronze"], ["CD853F", "Peru"],
  ["CF1020", "Vermelho Rubi"], ["CFCFCF", "Cinza Prata Claro"], ["CFA44D", "Mel"],
  ["D0B49F", "Pêssego Rosado"], ["D0F0C0", "Verde Pastel Claro"], ["D0FFEE", "Verde Água Claro Pastel"],
  ["D1A520", "Amarelo Âmbar Escuro"], ["D2691E", "Chocolate"], ["D2B48C", "Bronze Claro"],
  ["D26248", "Terracota"], ["D2D200", "Amarelo Oliva"], ["D3212D", "Vermelho Coral"],
  ["D4AF37", "Amarelo Mostarda"], ["D4D4D4", "Cinza Claro"], ["D592AF", "Rosa Pastel Médio"],
  ["D5B60A", "Mostarda Viva"], ["D5C9A6", "Areia Clara"], ["D6C6AF", "Bege Rosado"],
  ["D7B899", "Pêssego Terra"], ["D8BFD8", "Cardo"], ["D9AD93", "Rosa Salmão"],
  ["DA70D6", "Orquídea"], ["DA8A67", "Terracota Clara"], ["DAA520", "Ouro"],
  ["DAF7A6", "Verde Limão Pastel"], ["DB7093", "Rosa Pálido"], ["DB9065", "Terracota Mel"],
  ["DC143C", "Carmesim"], ["DCA043", "Mel Laranja"], ["DCC0A0", "Pêssego Bege"],
  ["DCDCDC", "Gainsboro"], ["DDA0DD", "Ameixa"], ["DEB887", "Madeira"],
  ["DFAD6B", "Caramelo Claro"], ["DFC5FE", "Lavanda Claro"], ["DFDFDF", "Branco Cinza"],
  ["E06C51", "Coral Queimado"], ["E0B88A", "Dourado Pastel"], ["E0D5C5", "Bege Claro"],
  ["E0FFFF", "Ciano Claro"], ["E0FFFF", "Gelo Suave"], ["E2725B", "Coral Escuro"],
  ["E30B5D", "Fúcsia"], ["E3B04B", "Amber"], ["E44D2E", "Laranja Vivo"],
  ["E49B0F", "Ouro Amarelo Escuro"], ["E5B73B", "Mostarda Clara"], ["E5C76B", "Amarelo Pastel Vivo"],
  ["E5D5C5", "Bege Pastel"], ["E5F9E0", "Verde Branco Pastel"], ["E63946", "Vermelho Coral Vivo"],
  ["E6843A", "Laranja Marmelada"], ["E6AC00", "Amarelo Âmbar"], ["E6E6FA", "Lavanda"],
  ["E75480", "Rosa Escuro"], ["E7BF8F", "Caramelo Pastel"], ["E8A090", "Salmão Pastel"],
  ["E8CDA0", "Creme Dourado"], ["E8E8E8", "Cinza Quase Branco"], ["E9967A", "Salmão Escuro"],
  ["EA9E8D", "Salmão Pastel Claro"], ["EB5406", "Laranja Calor"], ["EC5800", "Laranja Queimado Vivo"],
  ["ECC8C5", "Rosa Muito Claro"], ["ECE5AA", "Bege Amarelado"], ["ECEBE3", "Branco Creme"],
  ["EDEAE0", "Branco Pérola"], ["EE204D", "Vermelho Morango"], ["EE82EE", "Violeta"],
  ["EEA1AD", "Rosa Suave"], ["EEE8AA", "Caqui Pálido"], ["EEEEEE", "Branco Cinza Claro"],
  ["EF6F13", "Laranja Vivo Queimado"], ["EFDECD", "Pele Clara"], ["F08080", "Coral Claro"],
  ["F09372", "Pêssego Terracota"], ["F0A04B", "Laranja Mel"], ["F0C27F", "Abóbora Clara"],
  ["F0E68C", "Caqui"], ["F0F0F0", "Branco Gelo"], ["F0F8FF", "Branco Azulado"],
  ["F0FFF0", "Branco Mel Verde"], ["F0FFFF", "Branco Azulado Suave"], ["F16745", "Coral Vivo"],
  ["F1948A", "Rosa Suave Claro"], ["F19CBB", "Rosa Pastel Suave"], ["F1B42F", "Amarelo Girassol"],
  ["F1C40F", "Amarelo Ouro"], ["F1C6A7", "Pêssego Pastel"], ["F28500", "Laranja Abóbora"],
  ["F2A65A", "Pêssego Intenso"], ["F2D7D5", "Rosa Muito Pálido"], ["F38725", "Laranja Âmbar"],
  ["F3A505", "Ouro Vivo"], ["F3E9D2", "Creme Pastel"], ["F4A460", "Areia Marrom"],
  ["F4C842", "Amarelo Canário"], ["F4CA16", "Amarelo Banana"], ["F5A623", "Laranja Canário"],
  ["F5C800", "Amarelo Cadmio"], ["F5CBA7", "Pêssego Claro"], ["F5DEB3", "Trigo"],
  ["F5D5CB", "Rosa Bebê Quente"], ["F5F5DC", "Bege"], ["F5FFFA", "Branco Menta"],
  ["F5F5F5", "Branco Fumaça"], ["F7E7CE", "Champagne"], ["F7F7F7", "Branco Neutro"],
  ["F8D030", "Amarelo Elétrico"], ["F8F8FF", "Branco Fantasma"], ["F97306", "Laranja Vivo"],
  ["FA8072", "Salmão"], ["FAD7A0", "Pêssego Dourado"], ["FAEBD7", "Branco Antigo"],
  ["FAF0E6", "Linho"], ["FAFAD2", "Amarelo Dourado Claro"], ["FAF4EE", "Creme Quente"],
  ["FB607F", "Flamingo"], ["FB8B24", "Laranja Suave"], ["FC2847", "Vermelho Brilhante"],
  ["FCA044", "Laranja Pastel Médio"], ["FCB514", "Amarelo Solar"], ["FCC200", "Amarelo Dourado"],
  ["FCD12A", "Amarelo Limão"], ["FCEDDA", "Pêssego Muito Claro"], ["FD7C6E", "Coral Salmão"],
  ["FDBCB4", "Rosa Salmão Claro"], ["FDD5B1", "Pêssego Areia"], ["FDE3A7", "Amarelo Mel Claro"],
  ["FDF5E6", "Branco Creme"], ["FE6F5E", "Coral Vivo Claro"], ["FE828C", "Rosa Coral Claro"],
  ["FEF200", "Amarelo Limão Vivo"], ["FEFEFE", "Branco Puro"], ["FF0000", "Vermelho"],
  ["FF00FF", "Magenta"], ["FF1493", "Rosa Forte"], ["FF2400", "Escarlate"],
  ["FF4500", "Laranja Vermelho"], ["FF6347", "Tomate"], ["FF6384", "Rosa Vivo"],
  ["FF6B6B", "Coral Vivo"], ["FF6961", "Salmão Pastel"], ["FF7F00", "Laranja Puro"],
  ["FF7F50", "Coral"], ["FF8C00", "Laranja Escuro"], ["FF99CC", "Rosa Pastel"],
  ["FF9900", "Laranja Médio"], ["FF9999", "Rosa Salmão Suave"], ["FFA07A", "Salmão Claro"],
  ["FFA500", "Laranja"], ["FFB347", "Laranja Pastel Suave"], ["FFB6C1", "Rosa Claro"],
  ["FFBE7D", "Damasco"], ["FFC0CB", "Rosa"], ["FFC300", "Dourado Vivo"],
  ["FFD700", "Ouro Amarelo"], ["FFD93D", "Amarelo Ouro Vivo"], ["FFDAB9", "Pêssego"],
  ["FFDEAD", "Navajo Branco"], ["FFE135", "Banana"], ["FFE4B5", "Mocassim"],
  ["FFE4C4", "Biscoito"], ["FFE4E1", "Rosa Enevoado"], ["FFE5B4", "Pêssego Suave"],
  ["FFEBCD", "Amêndoa Alvejada"], ["FFECB3", "Amarelo Pastel Claro"], ["FFEFD5", "Papaia"],
  ["FFF0F5", "Lavanda Rosa"], ["FFF44F", "Amarelo Limão Suave"], ["FFF5EE", "Conchas do Mar"],
  ["FFF8DC", "Seda de Milho"], ["FFFACD", "Chiffon Limão"], ["FFFAF0", "Branco Floral"],
  ["FFFAFA", "Neve"], ["FFFF00", "Amarelo"], ["FFFF99", "Amarelo Claro Pastel"],
  ["FFFFE0", "Amarelo Claro"], ["FFFFF0", "Marfim"], ["FFFFFF", "Branco"],
  // Tintas específicas brasileiras e artísticas
  ["1B0000", "Marrom Escuro Profundo"], ["3B1005", "Terracota Escuro"], ["52240E", "Terracota Tijolo"],
  ["8B2252", "Uva"], ["6A1F2D", "Vinho Escuro"], ["9B111E", "Vermelho Rubi Escuro"],
  ["B05C52", "Rosa Terracota"], ["C9473F", "Vermelho Tijolo Vivo"], ["C98A49", "Terracota Mel"],
  ["E97451", "Terracota Clara Viva"], ["F0724D", "Laranja Terracota"],
  ["A05C34", "Marrom Terracota"], ["7A3E2C", "Marrom Tijolo"],
  ["C19A6B", "Caramelo Suave"], ["B5A100", "Amarelo Oliva"], ["7C6A00", "Ocre Escuro Puro"],
  ["6B5B00", "Amarelo Ocre"], ["9D8500", "Mostarda Escura"], ["D4A700", "Mel Âmbar"],
  ["F5B800", "Amarelo Intenso"], ["DAA000", "Ouro Queimado"],
  ["2C6B2F", "Verde Tropical"], ["1B5E20", "Verde Floresta Escuro"], ["4CAF50", "Verde Médio"],
  ["66BB6A", "Verde Claro Médio"], ["A5D6A7", "Verde Pastel"], ["C8E6C9", "Verde Bebê"],
  ["E8F5E9", "Verde Branco"],
  ["0D47A1", "Azul Cobalto Escuro"], ["1565C0", "Azul Real"], ["1976D2", "Azul Médio Vivo"],
  ["42A5F5", "Azul Celeste"], ["90CAF9", "Azul Pastel"], ["BBDEFB", "Azul Bebê"],
  ["4A148C", "Roxo Imperial"], ["6A1B9A", "Roxo Escuro Médio"], ["7B1FA2", "Roxo Médio Escuro"],
  ["AB47BC", "Lilás Médio"], ["CE93D8", "Lavanda Médio"], ["E1BEE7", "Lavanda Pastel"],
  ["880E4F", "Magenta Escuro"], ["AD1457", "Rosa Escuro Médio"], ["D81B60", "Rosa Vivo Intenso"],
  ["F06292", "Rosa Suave Intenso"], ["F48FB1", "Rosa Médio Pastel"], ["FCE4EC", "Rosa Bebê"],
  ["BF360C", "Laranja Queimado Escuro"], ["D84315", "Laranja Queimado Médio"], ["E64A19", "Laranja Vivo Escuro"],
  ["FF7043", "Laranja Coral Vivo"], ["FFAB91", "Salmão Pastel Suave"], ["FBE9E7", "Salmão Pastel Muito Claro"],
];

function nameColor(r, g, b) {
  let minDist = Infinity;
  let bestName = "Cor Desconhecida";
  let minDistRaw = Infinity;

  for (const [hex, name] of COLOR_DB) {
    const hr = parseInt(hex.slice(0, 2), 16);
    const hg = parseInt(hex.slice(2, 4), 16);
    const hb = parseInt(hex.slice(4, 6), 16);
    const dist = (r - hr) ** 2 * 0.299 + (g - hg) ** 2 * 0.587 + (b - hb) ** 2 * 0.114;
    if (dist < minDist) {
      minDist = dist;
      minDistRaw = dist;
      bestName = name;
    }
  }
  // Confidence: max dist would be 255^2 * (0.299+0.587+0.114) = 255^2 = 65025
  const confidence = Math.round(Math.max(0, Math.min(100, (1 - minDistRaw / 8000) * 100)));
  return { name: bestName, confidence: Math.min(99, Math.max(60, confidence)) };
}

function rgbToHex(r, g, b) {
  return "#" + [r, g, b].map(v => v.toString(16).padStart(2, "0").toUpperCase()).join("");
}

function hexToRgb(hex) {
  const c = hex.replace("#", "");
  return [parseInt(c.slice(0, 2), 16), parseInt(c.slice(2, 4), 16), parseInt(c.slice(4, 6), 16)];
}

function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max === min) { h = s = 0; }
  else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function rgbToCmyk(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const k = 1 - Math.max(r, g, b);
  if (k === 1) return [0, 0, 0, 100];
  return [
    Math.round(((1 - r - k) / (1 - k)) * 100),
    Math.round(((1 - g - k) / (1 - k)) * 100),
    Math.round(((1 - b - k) / (1 - k)) * 100),
    Math.round(k * 100)
  ];
}

const PIGMENTS = {
  C: { name: "Azul Ftalo", color: "#0e4d6e" },
  M: { name: "Vermelho Quinacridona", color: "#c0334d" },
  Y: { name: "Amarelo Cadmio", color: "#f5c400" },
  K: { name: "Preto Marfim", color: "#1a1a1a" },
  W: { name: "Branco Titânio", color: "#f0eee8" },
  ORANGE: { name: "Laranja Cadmio", color: "#e07020" },
  VIRIDIAN: { name: "Verde Viridian", color: "#3e8e6c" },
  UMBER: { name: "Siena Queimada", color: "#7a4420" },
};

function rgbToPaintMix(r, g, b) {
  const rn = r / 255, gn = g / 255, bn = b / 255;
  let c = 1 - rn, m = 1 - gn, y = 1 - bn;
  const minCMY = Math.min(c, m, y);
  const k = minCMY * 0.85;
  if (1 - k > 0.01) { c = (c - k) / (1 - k); m = (m - k) / (1 - k); y = (y - k) / (1 - k); }
  else { c = m = y = 0; }
  const saturation = 1 - (Math.min(rn, gn, bn) / (Math.max(rn, gn, bn) + 0.001));
  let w = Math.max(0, (1 - k) * (1 - saturation) * 0.9);
  let components = [
    { key: "C", raw: c }, { key: "M", raw: m }, { key: "Y", raw: y },
    { key: "K", raw: k * 0.8 }, { key: "W", raw: w },
  ];
  let merged = [];
  if (c > 0.15 && y > 0.15) {
    merged.push({ key: "VIRIDIAN", raw: Math.min(c, y) * 0.7 });
    components = components.map(cp => cp.key === "C" ? { ...cp, raw: c * 0.4 } : cp.key === "Y" ? { ...cp, raw: y * 0.4 } : cp);
  }
  if (m > 0.12 && y > 0.12) {
    merged.push({ key: "ORANGE", raw: Math.min(m, y) * 0.5 });
    components = components.map(cp => cp.key === "M" ? { ...cp, raw: m * 0.5 } : cp.key === "Y" ? { ...cp, raw: y * 0.5 } : cp);
  }
  const all = [...components, ...merged];
  const rawTotal = all.reduce((s, x) => s + x.raw, 0) || 1;
  let result = all
    .map(x => ({ name: PIGMENTS[x.key].name, color: PIGMENTS[x.key].color, pct: Math.round((x.raw / rawTotal) * 100) }))
    .filter(x => x.pct >= 3)
    .sort((a, b) => b.pct - a.pct);
  const pctTotal = result.reduce((s, x) => s + x.pct, 0);
  if (pctTotal !== 100 && result.length > 0) result[0].pct += 100 - pctTotal;
  if (result.length === 0) result = [{ name: PIGMENTS.K.name, color: PIGMENTS.K.color, pct: 90 }, { name: PIGMENTS.W.name, color: PIGMENTS.W.color, pct: 10 }];
  return result;
}

// ============================================================
// BACKEND (Spring Boot)
// ============================================================
// Endereço do backend Java (Spring Boot). Ajuste a porta/host se necessário.
const BACKEND_URL = 'http://localhost:8080';

// ============================================================
// BLUETOOTH SERVICE (simulate)
// ============================================================
const DEVICE_INFO = { name: "Spectra V1", firmware: "1.0.4", sensor: "TCS34725", model: "ESP32-WROOM-32", battery: 85 };

const CONNECT_STEPS = [
  { msg: "Buscando dispositivos BLE...", delay: 600 },
  { msg: "Spectra V1 encontrado!", delay: 500 },
  { msg: "Autenticando...", delay: 600 },
  { msg: "Conectado ao sensor TCS34725", delay: 400 },
];

const SAMPLE_COLORS = [
  { hex: "#D4AF37", rgb: [212, 175, 55] },
  { hex: "#0047AB", rgb: [0, 71, 171] },
  { hex: "#4E6B3B", rgb: [78, 107, 59] },
  { hex: "#D26248", rgb: [210, 98, 72] },
  { hex: "#C19A6B", rgb: [193, 154, 107] },
  { hex: "#722F37", rgb: [114, 47, 55] },
  { hex: "#5B92A8", rgb: [91, 146, 168] },
  { hex: "#F5C800", rgb: [245, 200, 0] },
  { hex: "#2D5A27", rgb: [45, 90, 39] },
  { hex: "#8B5E3C", rgb: [139, 94, 60] },
  { hex: "#E97451", rgb: [233, 116, 81] },
  { hex: "#8A9A86", rgb: [138, 154, 134] },
  { hex: "#FF6B6B", rgb: [255, 107, 107] },
  { hex: "#4169E1", rgb: [65, 105, 225] },
  { hex: "#DA70D6", rgb: [218, 112, 214] },
  { hex: "#A0522D", rgb: [160, 82, 45] },
  { hex: "#20B2AA", rgb: [32, 178, 170] },
  { hex: "#FFD700", rgb: [255, 215, 0] },
  { hex: "#B22222", rgb: [178, 34, 34] },
  { hex: "#6B4226", rgb: [107, 66, 38] },
];

// ============================================================
// HISTORY SERVICE (with persistent storage via window.storage)
// ============================================================
const DEFAULT_HISTORY = [
  {
    id: "h1", name: "Terracota", hex: "#D26248", rgb: [210, 98, 72], confidence: 91, date: "Hoje, 14:32",
    mix: [{ name: "Vermelho Quinacridona", pct: 42, color: "#c0334d" }, { name: "Amarelo Cadmio", pct: 28, color: "#f5c400" }, { name: "Siena Queimada", pct: 18, color: "#7a4420" }, { name: "Branco Titânio", pct: 12, color: "#f0eee8" }]
  },
  {
    id: "h2", name: "Azul Oceano", hex: "#1A4B6B", rgb: [26, 75, 107], confidence: 87, date: "Ontem, 09:15",
    mix: [{ name: "Azul Ftalo", pct: 58, color: "#0e4d6e" }, { name: "Preto Marfim", pct: 22, color: "#1a1a1a" }, { name: "Verde Viridian", pct: 12, color: "#3e8e6c" }, { name: "Branco Titânio", pct: 8, color: "#f0eee8" }]
  },
  {
    id: "h3", name: "Verde Sálvia", hex: "#8A9A86", rgb: [138, 154, 134], confidence: 94, date: "12 Mar, 16:45",
    mix: [{ name: "Branco Titânio", pct: 50, color: "#f0eee8" }, { name: "Verde Viridian", pct: 28, color: "#3e8e6c" }, { name: "Amarelo Cadmio", pct: 14, color: "#f5c400" }, { name: "Preto Marfim", pct: 8, color: "#1a1a1a" }]
  },
];

// ============================================================
// STATE
// ============================================================
let state = {
  screen: 'splash',
  tab: 'home',
  connected: false,
  connecting: false,
  connectMsg: '',
  scanning: false,
  result: null,
  mixColor: null,
  mixVolume: 100,
  history: [],
  simMode: true,
  detailColor: null,
  sensorRaw: null,
  historyFilter: '',
  storageLoaded: false,
  tips: [
    "Para maior precisão, certifique-se de que a superfície está limpa e o dispositivo bem encostado, sem luz externa.",
    "Escaneie a mesma superfície 2–3 vezes para confirmar a leitura. O sensor TCS34725 tem precisão de ±2nm.",
    "Em superfícies muito reflexivas (metais, vernizes), incline o sensor 15° para reduzir reflexos especulares.",
    "A calibração com a placa branca deve ser feita a cada 30 minutos em ambientes com variação de temperatura.",
    "Cores fluorescentes podem ter leituras imprecisas pois emitem luz além de refletir — é uma limitação física do sensor.",
  ],
  tipIndex: 0,
};

function setState(updater) {
  if (typeof updater === 'function') {
    const partial = updater(state);
    state = { ...state, ...partial };
  } else {
    state = { ...state, ...updater };
  }
  render();
}

// Storage persistence
async function persistHistory(hist) {
  if (window.storage) {
    try { await window.storage.set('spectra_history', JSON.stringify(hist)); } catch (e) { }
  }
}

async function loadStoredHistory() {
  if (window.storage) {
    try {
      const r = await window.storage.get('spectra_history');
      if (r && r.value) return JSON.parse(r.value);
    } catch (e) { }
  }
  return null;
}

// ============================================================
// ICONS
// ============================================================
function svgIcon(type) {
  const icons = {
    home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    scan: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/></svg>`,
    history: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.5"/></svg>`,
    device: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="17" r="1"/></svg>`,
    settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
    bluetooth: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"/></svg>`,
    battery: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="6" width="18" height="12" rx="2"/><line x1="23" y1="13" x2="23" y2="11"/></svg>`,
    zap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    aperture: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="14.31" y1="8" x2="20.05" y2="17.94"/><line x1="9.69" y1="8" x2="21.17" y2="8"/><line x1="7.38" y1="12" x2="13.12" y2="2.06"/><line x1="9.69" y1="16" x2="3.95" y2="6.06"/><line x1="14.31" y1="16" x2="2.83" y2="16"/><line x1="16.62" y1="12" x2="10.88" y2="21.94"/></svg>`,
    drop: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
    warn: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`,
    moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
    sim: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M15 2v6H9V2"/></svg>`,
    trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    copy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
    download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
    x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
    palette: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
  };
  return icons[type] || '';
}

function spectraLogo(size = 28) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" fill="none">
    <defs>
      <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FF6B6B"/><stop offset="25%" stop-color="#FFD93D"/>
        <stop offset="50%" stop-color="#6BCB77"/><stop offset="75%" stop-color="#4D96FF"/>
        <stop offset="100%" stop-color="#C77DFF"/>
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="42" stroke="url(#lg1)" stroke-width="5" fill="none" stroke-dasharray="4 3"/>
    <circle cx="50" cy="50" r="28" stroke="url(#lg1)" stroke-width="3" fill="none"/>
    <circle cx="50" cy="50" r="8" fill="url(#lg1)"/>
    <line x1="50" y1="8" x2="50" y2="22" stroke="url(#lg1)" stroke-width="3" stroke-linecap="round"/>
    <line x1="50" y1="78" x2="50" y2="92" stroke="url(#lg1)" stroke-width="3" stroke-linecap="round"/>
    <line x1="8" y1="50" x2="22" y2="50" stroke="url(#lg1)" stroke-width="3" stroke-linecap="round"/>
    <line x1="78" y1="50" x2="92" y2="50" stroke="url(#lg1)" stroke-width="3" stroke-linecap="round"/>
  </svg>`;
}

// ============================================================
// CONFIDENCE COLOR
// ============================================================
function confidenceColor(conf) {
  if (conf >= 90) return '#4ade80';
  if (conf >= 75) return '#ffd93d';
  return '#ff6b6b';
}

// ============================================================
// UI COMPONENTS
// ============================================================
function statusBar() {
  return `<div class="status-bar">
    <div class="logo-mark">${spectraLogo(28)}<span class="logo-name">SPECTRA</span></div>
    <div class="conn-badge" onclick="switchTab('device')">
      <div class="conn-dot${state.connected ? ' on' : ''}"></div>
      <span>${state.connected ? 'Conectado' : 'Desconectado'}</span>
    </div>
  </div>`;
}

function navBar() {
  const tabs = ['home', 'scan', 'history', 'device', 'settings'];
  const labels = ['Home', 'Escanear', 'Catálogo', 'Dispositivo', 'Config'];
  const icons = ['home', 'scan', 'history', 'device', 'settings'];
  return `<div class="nav">${tabs.map((t, i) => `
    <button class="nav-btn${state.tab === t ? ' active' : ''}" onclick="switchTab('${t}')">
      ${svgIcon(icons[i])}
      <span>${labels[i]}</span>
      <div class="nav-indicator"></div>
    </button>`).join('')}</div>`;
}

// ============================================================
// SPLASH
// ============================================================
function splashScreen() {
  return `<div class="screen splash" style="position:relative">
    <div class="splash-scan-line"></div>
    <div class="splash-logo">${spectraLogo(90)}</div>
    <h1 class="splash-title">SPECTRA</h1>
    <p class="splash-sub">ESCANEIE · DESCUBRA · REPRODUZA</p>
    <p class="splash-version">VERSÃO 2.0 · ${COLOR_DB.length} CORES</p>
    <button class="splash-btn" onclick="initApp()">INICIAR</button>
  </div>`;
}

async function initApp() {
  const stored = await loadStoredHistory();
  setState({ screen: 'main', history: stored || DEFAULT_HISTORY, storageLoaded: true });
}

// ============================================================
// HOME TAB
// ============================================================
function homeTab() {
  const last = state.history[0];
  const tip = state.tips[state.tipIndex % state.tips.length];
  const avgConfidence = state.history.length
    ? Math.round(state.history.reduce((s, h) => s + (h.confidence || 85), 0) / state.history.length)
    : 0;

  return `
    <div class="page-header"><h1>Visão Geral</h1><p>Bem-vindo ao Spectra Studio.</p></div>
    ${last ? `
    <div class="home-last-label">ÚLTIMA LEITURA</div>
    <div class="home-last-color" onclick="showDetail('${last.id}')">
      <div class="home-color-swatch" style="background:${last.hex}">
        <span style="font-size:11px;font-weight:700;letter-spacing:.1em;color:rgba(255,255,255,.6)">COR ESCANEADA</span>
      </div>
      <div class="home-color-info">
        <div>
          <div class="home-color-name">${last.name}</div>
          <div class="home-color-hex">${last.hex} · ${last.rgb.join(', ')}</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px">
          <div style="text-align:right">
            <div style="font-size:10px;color:#5a5a68;font-weight:600;letter-spacing:.08em">CONF.</div>
            <div style="font-size:15px;font-weight:700;color:${confidenceColor(last.confidence || 85)}">${last.confidence || 85}%</div>
          </div>
          <div style="width:32px;height:32px;border-radius:8px;background:${last.hex}40;border:1px solid ${last.hex}60;display:flex;align-items:center;justify-content:center;color:${last.hex}">${svgIcon('drop')}</div>
        </div>
      </div>
    </div>` : ''}
    <button class="scan-btn-big" onclick="switchTab('scan')">
      <div class="scan-btn-big-inner">
        <div class="scan-btn-big-text">
          <div class="scan-btn-big-label">AÇÃO PRINCIPAL</div>
          <div class="scan-btn-big-title">ESCANEAR COR</div>
        </div>
        <div class="scan-btn-big-icon">${svgIcon('scan')}</div>
      </div>
    </button>
    <div class="stat-grid">
      <div class="stat-card">
        <div class="stat-icon" style="background:rgba(77,150,255,.1);color:#4d96ff">${svgIcon('drop')}</div>
        <div class="stat-num" style="color:#4d96ff">${state.history.length}</div>
        <div class="stat-label">Cores no Catálogo</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon" style="background:rgba(74,222,128,.1);color:#4ade80">${svgIcon('zap')}</div>
        <div class="stat-num" style="color:${confidenceColor(avgConfidence)}">${avgConfidence || '—'}${avgConfidence ? '%' : ''}</div>
        <div class="stat-label">Precisão Média</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon" style="background:rgba(199,125,255,.1);color:#c77dff">${svgIcon('palette')}</div>
        <div class="stat-num" style="color:#c77dff">${COLOR_DB.length}</div>
        <div class="stat-label">Banco de Cores</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon" style="background:rgba(255,217,61,.1);color:#ffd93d">${svgIcon('bluetooth')}</div>
        <div class="stat-num" style="color:${state.connected ? '#4ade80' : '#f87171'}">${state.connected ? 'ON' : 'OFF'}</div>
        <div class="stat-label">Hardware</div>
      </div>
    </div>
    <div class="tip-card">
      <div class="tip-label">DICA DE USO</div>
      <div class="tip-text">${tip}</div>
    </div>`;
}

// ============================================================
// SCAN TAB
// ============================================================
function scanTab() {
  const { connected, scanning, result } = state;

  if (result) return `
    <div class="scan-area">
      <div class="result-panel">
        <div class="result-swatch" style="background:${result.hex};box-shadow:0 0 60px ${result.hex}55"></div>
        <div class="result-card" style="width:100%">
          <div class="result-card-top">
            <div class="result-card-glow" style="background:${result.hex}"></div>
            <div class="result-name">${result.name}</div>
            <div class="result-codes">
              <div class="result-code-pill" onclick="copyToClipboard('${result.hex}','HEX copiado')"><span>HEX</span>${result.hex}</div>
              <div class="result-code-pill" onclick="copyToClipboard('rgb(${result.rgb.join(',')})','RGB copiado')"><span>RGB</span>${result.rgb.join(', ')}</div>
            </div>
            <div class="result-confidence">
              <div class="confidence-bar-wrap">
                <div class="confidence-bar-fill" style="width:${result.confidence}%;background:${confidenceColor(result.confidence)}"></div>
              </div>
              <span style="font-size:10px;color:${confidenceColor(result.confidence)};font-weight:700">${result.confidence}% conf.</span>
            </div>
          </div>
          <div class="result-actions">
            <button class="btn-secondary" onclick="setState({result:null})">Novo scan</button>
            <button class="btn-primary" onclick="openMix()">${svgIcon('drop')}&nbsp;VER MISTURA</button>
          </div>
        </div>
      </div>
    </div>`;

  return `
    <div class="page-header" style="text-align:center;align-items:center">
      <h1>Escaneamento</h1>
      <p>Aproxime o Spectra da superfície alvo.</p>
    </div>
    <div class="scan-area">
      <div class="scan-bg-glow" id="scanGlow"></div>
      <div class="scan-circle-wrap">
        <div class="scan-ring"></div>
        <div class="scan-ring-2"></div>
        <div class="scan-ring-3"></div>
        ${scanning ? '<div class="scan-pulse-ring"></div><div class="scan-pulse-ring scan-pulse-ring-2"></div>' : ''}
        <button class="scan-main-btn${scanning ? ' scanning' : ''}" onclick="doScan()">
          <div style="${scanning ? 'animation:spin 3s linear infinite' : ''}">${svgIcon('aperture')}</div>
          <span class="scan-btn-label">${scanning ? 'ANALISANDO' : 'ESCANEAR'}</span>
          ${!scanning ? `<span class="scan-btn-sub">${connected ? 'PRESSIONE PARA CAPTURAR' : 'SEM DISPOSITIVO'}</span>` : ''}
        </button>
      </div>
      ${scanning ? `<div class="scan-progress-msg" id="scanMsg">${state.scanMsg || 'Lendo canal RGB...'}</div>` : ''}
      <div class="scan-status-row">
        <div class="scan-status-item">
          <div class="scan-status-icon${connected ? ' active' : ''}">${svgIcon('bluetooth')}</div>
          <span>BLUETOOTH</span>
        </div>
        <div class="scan-status-item">
          <div class="scan-status-icon${connected ? ' active' : ''}">${svgIcon('aperture')}</div>
          <span>SENSOR</span>
        </div>
        <div class="scan-status-item">
          <div class="scan-status-icon${connected ? ' active' : ''}">${svgIcon('battery')}</div>
          <span>BATERIA</span>
        </div>
      </div>
      ${!connected ? `<div style="margin-top:24px"><button class="btn-primary" style="width:180px" onclick="switchTab('device')">${svgIcon('bluetooth')}&nbsp;CONECTAR</button></div>` : ''}
    </div>`;
}

const SCAN_MSGS = [
  'Iniciando sensor TCS34725...',
  'Lendo canal claro (C)...',
  'Lendo canais RGB...',
  'Normalizando valores...',
  'Identificando cor no banco...',
  'Calculando mistura...',
];

function doScan() {
  if (!state.connected) { switchTab('device'); return; }
  if (state.scanning) return;
  setState({ scanning: true, result: null, scanMsg: SCAN_MSGS[0] });

  let msgIdx = 0;
  const msgInterval = setInterval(() => {
    msgIdx++;
    if (msgIdx < SCAN_MSGS.length) {
      const el = document.getElementById('scanMsg');
      if (el) el.textContent = SCAN_MSGS[msgIdx];
    }
  }, 450);

  // Consulta o backend Spring Boot (endpoint GET /cor), que tira a foto,
  // detecta a cor dominante e retorna o HEX da cor catalogada mais próxima.
  fetch(`${BACKEND_URL}/cor`)
    .then(res => {
      if (!res.ok) throw new Error('Resposta inválida do backend');
      return res.json();
    })
    .then(dados => {
      clearInterval(msgInterval);
      const hex = '#' + dados.hex.replace('#', '').trim().toUpperCase();
	const r = dados.r;
	const g = dados.g;
	const b = dados.b;
	const name = dados.nome;
	
	// Mantém o cálculo de confiança existente
	const { confidence } = nameColor(r, g, b);
      const mix = rgbToPaintMix(r, g, b);
      const hsl = rgbToHsl(r, g, b);
      const cmyk = rgbToCmyk(r, g, b);
      const result = {
        id: 'scan_' + Date.now(),
        name, confidence, hex,
        rgb: [r, g, b], hsl, cmyk, mix,
        date: 'Agora mesmo',
      };

      const newHistory = [result, ...state.history.filter(h => h.id !== result.id)];
      persistHistory(newHistory);
      setState({ scanning: false, result, history: newHistory, scanMsg: '' });
    })
    .catch(err => {
      clearInterval(msgInterval);
      console.error('Falha ao consultar o backend:', err);
      setState({ scanning: false, scanMsg: '' });
      showToast('Não foi possível conectar ao backend', 'warn');
    });
}

// ============================================================
// MIX SCREEN
// ============================================================
function openMix() {
  if (state.result) setState({ screen: 'mix', mixColor: state.result });
}

function mixScreen() {
  const c = state.mixColor;
  if (!c) return '';
  const vol = parseInt(state.mixVolume) || 100;

  const recipe = c.mix.map(m => `${m.name}: ${Math.round(m.pct / 100 * vol)}ml (${m.pct}%)`).join('\n');

  return `<div class="screen mix-screen" style="display:flex;flex-direction:column;overflow:hidden">
    <div class="mix-header">
      <div class="mix-back-btn" onclick="setState({screen:'main'})">${svgIcon('back')}</div>
      <span class="mix-title">Mistura Recomendada</span>
    </div>
    <div class="mix-content">
      <div class="mix-target" style="background:${c.hex}">
        <div class="mix-target-overlay"></div>
        <div class="mix-target-info">
          <div class="mix-target-name">${c.name}</div>
          <div class="mix-target-hex">${c.hex} · RGB ${c.rgb.join(', ')}</div>
        </div>
      </div>

      <div class="mix-volume-row">
        <span class="mix-volume-label">${svgIcon('drop')}&nbsp;&nbsp;Volume total da mistura</span>
        <input class="mix-volume-input" type="number" min="1" max="9999" value="${vol}"
          oninput="setState({mixVolume:parseInt(this.value)||100})" id="volInput">
        <span class="mix-volume-unit">ml</span>
      </div>

      <div class="mix-proportions">
        <div class="mix-section-label">PROPORÇÃO DE TINTAS</div>
        ${c.mix.map(m => {
    const ml = Math.round(m.pct / 100 * vol);
    return `<div class="mix-bar-row">
            <div class="mix-bar-labels">
              <span class="mix-bar-name">${m.name}</span>
              <span><span class="mix-bar-pct">${m.pct}%</span><span class="mix-bar-ml"> · ${ml}ml</span></span>
            </div>
            <div class="mix-bar-track">
              <div class="mix-bar-fill" style="width:${m.pct}%;background:${m.color}"></div>
            </div>
          </div>`;
  }).join('')}
      </div>

      <div class="mix-visual">
        <div class="mix-section-label" style="margin-bottom:12px">SIMULAÇÃO VISUAL</div>
        <div class="mix-visual-swatch">
          ${c.mix.map(m => `<div style="width:${m.pct}%;background:${m.color};height:100%"></div>`).join('')}
        </div>
      </div>

      <div class="mix-note">
        <div class="mix-note-icon">${svgIcon('warn')}</div>
        <div class="mix-note-text"><strong>Estimativa baseada em CMY subtrativo.</strong> A conversão de cores digitais para pigmentos físicos é aproximada. Resultados reais variam por marca e tipo de tinta.</div>
      </div>
    </div>

    <div class="mix-footer">
      <button class="btn-copy" onclick="copyToClipboard(${JSON.stringify(recipe).replace(/'/g, "\\'")},'Receita copiada')">${svgIcon('copy')}&nbsp;COPIAR RECEITA</button>
      <button class="btn-primary" onclick="saveMixColor()">${svgIcon('check')}&nbsp;SALVAR</button>
    </div>
  </div>`;
}

function saveMixColor() {
  const c = state.mixColor;
  if (c && !state.history.find(h => h.id === c.id)) {
    const newHistory = [c, ...state.history];
    persistHistory(newHistory);
    setState(s => ({ history: newHistory, screen: 'main', tab: 'history', result: null, mixColor: null }));
  } else {
    setState({ screen: 'main', tab: 'history', result: null, mixColor: null });
  }
}

// ============================================================
// HISTORY TAB
// ============================================================
function historyTab() {
  const q = state.historyFilter.toLowerCase();
  const filtered = q ? state.history.filter(c => c.name.toLowerCase().includes(q) || c.hex.toLowerCase().includes(q)) : state.history;

  return `
    <div class="page-header"><h1>Catálogo</h1><p>${state.history.length} cor${state.history.length !== 1 ? 'es' : ''} escaneada${state.history.length !== 1 ? 's' : ''}.</p></div>
    <div class="history-search">${svgIcon('search')}
      <input type="text" placeholder="Buscar por nome ou HEX..." value="${state.historyFilter}"
        oninput="setState({historyFilter:this.value})" />
    </div>
    <div class="history-list">
      ${filtered.length === 0 ? `
        <div class="history-empty">
          <div class="history-empty-icon">${svgIcon('drop')}</div>
          <div class="history-empty-text">${state.history.length === 0 ? 'Nenhuma cor escaneada ainda' : 'Nenhum resultado para "' + state.historyFilter + '"'}</div>
          <div class="history-empty-sub">${state.history.length === 0 ? 'Vá para Escanear e capture sua primeira cor.' : 'Tente outro nome ou código HEX.'}</div>
        </div>` :
      filtered.map(c => `
          <div class="history-item" onclick="showDetail('${c.id}')">
            <div class="history-swatch" style="background:${c.hex}"><div class="history-swatch-inner"></div></div>
            <div class="history-info">
              <div class="history-name">${c.name}</div>
              <div class="history-codes">${c.hex} · ${c.rgb.join(', ')}</div>
              <div class="history-bar">${c.mix.map(m => `<div style="width:${m.pct}%;background:${m.color};height:100%"></div>`).join('')}</div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">
              <div class="history-date">${c.date}</div>
              <div style="font-size:10px;color:${confidenceColor(c.confidence || 85)};font-weight:700">${c.confidence || 85}%</div>
            </div>
            <button class="history-delete-btn" onclick="event.stopPropagation();deleteHistoryItem('${c.id}')">${svgIcon('x')}</button>
          </div>`).join('')
    }
    </div>`;
}

function deleteHistoryItem(id) {
  const newHistory = state.history.filter(h => h.id !== id);
  persistHistory(newHistory);
  setState({ history: newHistory });
}

// ============================================================
// DETAIL OVERLAY
// ============================================================
function showDetail(id) {
  const c = state.history.find(h => h.id === id);
  if (!c) return;
  const hsl = c.hsl || rgbToHsl(...c.rgb);
  const cmyk = c.cmyk || rgbToCmyk(...c.rgb);
  const root = document.getElementById('root');
  const detailEl = document.createElement('div');
  detailEl.className = 'detail-overlay';
  detailEl.id = 'detailOverlay';
  detailEl.innerHTML = `
    <div class="detail-header">
      <div class="mix-back-btn" onclick="document.getElementById('detailOverlay').remove()">${svgIcon('back')}</div>
      <span class="mix-title">Detalhes da Cor</span>
      <div style="margin-left:auto;display:flex;gap:8px">
        <div class="mix-back-btn" onclick="openMixFromDetail('${id}')" title="Ver Mistura">${svgIcon('drop')}</div>
      </div>
    </div>
    <div class="detail-swatch-hero" style="background:${c.hex}">
      <div class="detail-swatch-overlay"></div>
    </div>
    <div class="detail-body">
      <div class="detail-name">${c.name}</div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:-6px;margin-bottom:4px">
        <div class="confidence-bar-wrap" style="width:120px">
          <div class="confidence-bar-fill" style="width:${c.confidence || 85}%;background:${confidenceColor(c.confidence || 85)}"></div>
        </div>
        <span style="font-size:11px;color:${confidenceColor(c.confidence || 85)};font-weight:700">${c.confidence || 85}% confiança</span>
      </div>
      <div class="detail-codes-grid">
        <div class="detail-code-card" onclick="copyToClipboard('${c.hex}','HEX copiado')">
          <div class="detail-code-label">HEX</div>
          <div class="detail-code-val">${c.hex}</div>
        </div>
        <div class="detail-code-card" onclick="copyToClipboard('rgb(${c.rgb.join(',')})','RGB copiado')">
          <div class="detail-code-label">RGB</div>
          <div class="detail-code-val">${c.rgb.join(', ')}</div>
        </div>
        <div class="detail-code-card" onclick="copyToClipboard('hsl(${hsl.join(',')})','HSL copiado')">
          <div class="detail-code-label">HSL</div>
          <div class="detail-code-val">${hsl[0]}° ${hsl[1]}% ${hsl[2]}%</div>
        </div>
        <div class="detail-code-card" onclick="copyToClipboard('cmyk(${cmyk.join(',')})','CMYK copiado')">
          <div class="detail-code-label">CMYK</div>
          <div class="detail-code-val">${cmyk[0]} ${cmyk[1]} ${cmyk[2]} ${cmyk[3]}</div>
        </div>
      </div>
      <div style="background:#0e0e14;border:1px solid rgba(255,255,255,.07);border-radius:16px;padding:16px;margin-top:4px">
        <div class="mix-section-label" style="margin-bottom:12px">FÓRMULA DE TINTA</div>
        ${c.mix.map(m => `
          <div class="mix-bar-row" style="margin-bottom:12px">
            <div class="mix-bar-labels">
              <span style="font-size:13px;font-weight:600;color:#d0cec8;display:flex;align-items:center;gap:8px">
                <span style="width:10px;height:10px;border-radius:3px;background:${m.color};display:inline-block;flex-shrink:0"></span>
                ${m.name}
              </span>
              <span style="font-family:'DM Mono',monospace;font-size:12px;color:#6a6878">${m.pct}%</span>
            </div>
            <div class="mix-bar-track" style="margin-top:6px">
              <div class="mix-bar-fill" style="width:${m.pct}%;background:${m.color}"></div>
            </div>
          </div>`).join('')}
      </div>
      <div style="padding:4px 0 8px;text-align:center;font-size:11px;color:#3a3a48;letter-spacing:.08em">Toque nos códigos para copiar</div>
    </div>`;
  root.appendChild(detailEl);
}

function openMixFromDetail(id) {
  document.getElementById('detailOverlay')?.remove();
  const c = state.history.find(h => h.id === id);
  if (c) setState({ screen: 'mix', mixColor: c });
}

// ============================================================
// DEVICE TAB
// ============================================================
function deviceTab() {
  const { connected, connecting, connectMsg, sensorRaw } = state;

  if (connecting) return `
    <div class="page-header"><h1>Dispositivo</h1><p>Conectando ao hardware.</p></div>
    <div class="device-card">
      <div class="device-connecting">
        <div class="bt-spinner"></div>
        <div class="device-connect-msg" id="connectMsg">${connectMsg || 'Iniciando...'}</div>
      </div>
    </div>`;

  if (!connected) return `
    <div class="page-header"><h1>Dispositivo</h1><p>Gerencie a conexão com o hardware.</p></div>
    <div class="device-card">
      <div class="device-disconnected">
        <div class="device-disconnected-icon">${svgIcon('bluetooth')}</div>
        <div class="device-disconnected-text">Nenhum dispositivo pareado</div>
      </div>
    </div>
    <div style="padding:16px 0">
      <button class="device-btn-connect" onclick="doConnect()">${svgIcon('bluetooth')}&nbsp;&nbsp;CONECTAR SPECTRA</button>
    </div>
    <div style="margin:0 20px">
      <div class="mix-note">
        <div class="mix-note-icon">${svgIcon('info')}</div>
        <div class="mix-note-text"><strong>Modo Simulado ativo.</strong> Ative o modo simulado em Configurações para testar o app sem hardware físico.</div>
      </div>
    </div>`;

  return `
    <div class="page-header"><h1>Dispositivo</h1><p>Spectra V1 conectado e pronto.</p></div>
    <div class="device-card">
      <div class="device-top">
        <div class="device-badge online"><span style="width:6px;height:6px;border-radius:50%;background:#4ade80;display:inline-block"></span>ONLINE</div>
        <div class="device-name">Spectra V1</div>
        <div class="device-model">ESP32 + TCS34725 · Bluetooth LE</div>
      </div>
      <div class="device-specs">
        <div class="device-spec">
          <div class="device-spec-label">${svgIcon('battery')} BATERIA</div>
          <div class="device-spec-val">${DEVICE_INFO.battery}%</div>
        </div>
        <div class="device-spec">
          <div class="device-spec-label">${svgIcon('zap')} FIRMWARE</div>
          <div class="device-spec-val">V${DEVICE_INFO.firmware}</div>
        </div>
        <div class="device-spec">
          <div class="device-spec-label">${svgIcon('aperture')} SENSOR</div>
          <div class="device-spec-val">${DEVICE_INFO.sensor}</div>
        </div>
        <div class="device-spec">
          <div class="device-spec-label">${svgIcon('refresh')} MODELO</div>
          <div class="device-spec-val">${DEVICE_INFO.model}</div>
        </div>
      </div>
      <div class="device-actions">
        <button class="device-btn-sm" style="width:100%" onclick="doSensorTest()" id="testSensorBtn">${svgIcon('aperture')}&nbsp;TESTAR SENSOR</button>
        <div class="device-action-row">
          <button class="device-btn-sm" onclick="doCalibrate()" id="calibrateBtn">${svgIcon('refresh')}&nbsp;CALIBRAR</button>
          <button class="device-btn-sm danger" onclick="setState({connected:false,sensorRaw:null})">${svgIcon('bluetooth')}&nbsp;DESCONECTAR</button>
        </div>
      </div>
    </div>
    ${sensorRaw ? `
    <div class="sensor-raw-card">
      <div class="sensor-raw-label">ÚLTIMA LEITURA RAW DO SENSOR</div>
      <div class="sensor-raw-grid">
        ${['R', 'G', 'B', 'C', 'LUX'].map((ch, i) => {
    const vals = [sensorRaw.r, sensorRaw.g, sensorRaw.b, sensorRaw.c, sensorRaw.lux];
    const colors = ['#f87171', '#4ade80', '#60a5fa', '#c0beb8', '#ffd93d'];
    return `<div class="sensor-raw-item">
            <div class="sensor-raw-ch" style="color:${colors[i]}">${ch}</div>
            <div class="sensor-raw-val">${vals[i]}</div>
          </div>`;
  }).join('')}
      </div>
    </div>` : ''}`;
}

function doConnect() {
  setState({ connecting: true, connectMsg: CONNECT_STEPS[0].msg });
  let i = 0;
  const next = () => {
    if (i >= CONNECT_STEPS.length) {
      setState({ connecting: false, connected: true });
      return;
    }
    const el = document.getElementById('connectMsg');
    if (el) el.textContent = CONNECT_STEPS[i].msg;
    else setState({ connectMsg: CONNECT_STEPS[i].msg });
    setTimeout(next, CONNECT_STEPS[i].delay);
    i++;
  };
  setTimeout(next, 100);
}

function doSensorTest() {
  const btn = document.getElementById('testSensorBtn');
  if (btn) { btn.disabled = true; btn.textContent = 'Lendo...'; }
  setTimeout(() => {
    const r = Math.floor(Math.random() * 3000 + 500);
    const g = Math.floor(Math.random() * 3000 + 500);
    const b = Math.floor(Math.random() * 3000 + 500);
    const c = Math.floor((r + g + b) * 0.9);
    const lux = Math.floor(c / 4);
    setState({ sensorRaw: { r, g, b, c, lux } });
    showToast('Leitura do sensor concluída', 'check');
  }, 1200);
}

function doCalibrate() {
  const btn = document.getElementById('calibrateBtn');
  if (btn) { btn.disabled = true; }
  showToast('Calibrando... Aponte para superfície branca', 'info');
  setTimeout(() => {
    if (Math.random() < 0.1) {
      showToast('Falha na calibração — tente novamente', 'warn');
    } else {
      showToast('Calibração concluída ✓ gain:4x int:24ms', 'check');
    }
    render();
  }, 2000);
}

// ============================================================
// SETTINGS TAB
// ============================================================
function settingsTab() {
  return `
    <div class="page-header"><h1>Configurações</h1></div>

    <div class="settings-section">
      <div class="settings-section-label">HARDWARE</div>
      <div class="settings-group">
        <div class="settings-row">
          <div class="settings-row-left">
            <div class="settings-row-icon" style="background:rgba(107,203,119,.1);color:#6bcb77">${svgIcon('sim')}</div>
            <span class="settings-row-label">Modo Simulado</span>
          </div>
          <div class="settings-toggle${state.simMode ? ' on' : ''}" onclick="setState(s=>({simMode:!s.simMode}))">
            <div class="settings-toggle-knob"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="settings-section">
      <div class="settings-section-label">BANCO DE CORES</div>
      <div class="settings-group">
        <div class="settings-row">
          <div class="settings-row-left">
            <div class="settings-row-icon" style="background:rgba(77,150,255,.1);color:#4d96ff">${svgIcon('drop')}</div>
            <span class="settings-row-label">Total de Cores</span>
          </div>
          <span class="settings-row-val">${COLOR_DB.length}</span>
        </div>
        <div class="settings-row">
          <div class="settings-row-left">
            <div class="settings-row-icon" style="background:rgba(199,125,255,.1);color:#c77dff">${svgIcon('info')}</div>
            <span class="settings-row-label">Algoritmo</span>
          </div>
          <span class="settings-row-val">CMY+NTC</span>
        </div>
      </div>
    </div>

    <div class="settings-section">
      <div class="settings-section-label">DADOS</div>
      <div class="settings-group">
        <div class="settings-row settings-row-small" onclick="exportHistory()">
          <div class="settings-row-left">
            <div class="settings-row-icon" style="background:rgba(74,222,128,.1);color:#4ade80">${svgIcon('download')}</div>
            <span class="settings-row-label">Exportar Catálogo CSV</span>
          </div>
          ${svgIcon('back')}
        </div>
        <div class="settings-row settings-row-small" onclick="clearHistory()">
          <div class="settings-row-left">
            <div class="settings-row-icon" style="background:rgba(248,113,113,.1);color:#f87171">${svgIcon('trash')}</div>
            <span class="settings-row-label danger">Limpar Catálogo</span>
          </div>
          ${svgIcon('back')}
        </div>
      </div>
    </div>

    <div style="padding:20px;text-align:center">
      <div style="font-size:11px;color:#2a2a38;font-weight:600;letter-spacing:.1em">SPECTRA V2.0 · MODO ${state.simMode ? 'SIMULADO' : 'REAL'}</div>
      <div style="font-size:10px;color:#1e1e2a;font-weight:500;margin-top:4px;letter-spacing:.06em">TCS34725 · ESP32 · BLE · CMY Subtrativo</div>
    </div>`;
}

function clearHistory() {
  if (!confirm('Limpar todo o catálogo?')) return;
  persistHistory([]);
  setState({ history: [] });
  showToast('Catálogo limpo', 'check');
}

function exportHistory() {
  if (state.history.length === 0) { showToast('Catálogo vazio', 'warn'); return; }
  const lines = ['Nome,HEX,R,G,B,Confiança,Data'];
  state.history.forEach(c => {
    lines.push(`"${c.name}",${c.hex},${c.rgb[0]},${c.rgb[1]},${c.rgb[2]},${c.confidence || 85}%,"${c.date}"`);
  });
  const blob = new Blob([lines.join('\n')], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'spectra_catalogo.csv'; a.click();
  URL.revokeObjectURL(url);
  showToast('CSV exportado', 'check');
}

// ============================================================
// UTILITIES
// ============================================================
function copyToClipboard(text, msg) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => showToast(msg, 'check'));
  } else {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    showToast(msg, 'check');
  }
}

function showToast(msg, iconType = 'check') {
  const existing = document.getElementById('toast');
  if (existing) existing.remove();
  const t = document.createElement('div');
  t.className = 'toast'; t.id = 'toast';
  t.innerHTML = svgIcon(iconType) + msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2200);
}

function switchTab(t) { setState({ tab: t }); }

// ============================================================
// RENDER
// ============================================================
function render() {
  const root = document.getElementById('root');
  if (state.screen === 'splash') { root.innerHTML = splashScreen(); return; }
  if (state.screen === 'mix') { root.innerHTML = mixScreen(); return; }

  let content = '';
  if (state.tab === 'home') content = homeTab();
  else if (state.tab === 'scan') content = scanTab();
  else if (state.tab === 'history') content = historyTab();
  else if (state.tab === 'device') content = deviceTab();
  else if (state.tab === 'settings') content = settingsTab();

  root.innerHTML = `<div class="screen">
    ${statusBar()}
    <div class="content">${content}</div>
    ${navBar()}
  </div>`;
}

render();